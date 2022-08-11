const Query = require("./query")
const Mutation = require("./mutation")
const Note = require("./note")
const User = require("./user")

module.exports = {
  Query,
  Mutation,
  Note,
  User,
}

// 스키마 작성 -> 데이터 모델 작성 -> 데이터를 쿼리하거나 업데이트하는 리졸버 코드를 작성
