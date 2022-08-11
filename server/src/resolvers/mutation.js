const models = require("../models")

module.exports = {
  newNote: async (parent, args, { models }) => {
    return await models.Note.create({
      content: args.content,
      author: "Adam Scott",
    })
  },
  deleteNote: async (parent, { id }, { modles }) => {
    try {
      await models.Note.findByIdAndRemove({ _id: id })
      return true
    } catch (error) {
      return false
    }
  },
}
