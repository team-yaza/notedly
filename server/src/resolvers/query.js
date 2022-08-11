const models = require("../models")

module.exports = {
  notes: async () => {
    return await models.Note.find()
  },
  note: async (parent, args) => {
    return await models.Note.findById(args.id)
  },
  user: async (parent, { username }, { models }) => {
    return await models.User.findOne({ username })
  },
  users: async (parent, args, { models }) => {
    return await models.User.find({})
  },
  me: async (parent, args, { models, user }) => {
    return await models.User.findById(user.id)
  },
  noteFeed: async (parent, { cursor }, { models }) => {
    const limit = 10
    let hasNextPage = false

    // 전달된 cursor가 없으면 기본 query는 빈 배열을 할당
    // 이를 통해 DB에서 최신 노트 목록을 당겨오게 됨
    let cursorQuery = {}

    // cursor가 있으면
    // 쿼리가 cursor 미만의 ObjectId를 가진 노트를 탐색
    if (cursor) {
      cursorQuery = { _id: { $lt: cursor } }
    }

    // DB에서 limit + 1개의 노트를 탐색하고 최신순으로 정렬
    let notes = await models.Note.find(cursorQuery)
      .sort({ _id: -1 })
      .limit(limit + 1)

    // 노트 개수가 limit를 초과하면
    // hasNextPage를 true로 설정하고 notes를 limit까지 자름
    if (notes.length > limit) {
      hasNextPage = true
      notes = notes.slice(0, -1)
    }

    const newCursor = notes[notes.length - 1]._id

    return {
      notes,
      cursor: newCursor,
      hasNextPage,
    }
  },
}
