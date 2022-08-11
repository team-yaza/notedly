const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { AuthenticationError, ForbiddenError } = require("apollo-server-express")
const mongoose = require("mongoose")

const models = require("../models")
require("dotenv").config()
const gravatar = require("../utils/gravatar")

module.exports = {
  newNote: async (parent, args, { models, user }) => {
    if (!user) {
      throw new AuthenticationError("you must be signed int to create a note")
    }

    return await models.Note.create({
      content: args.content,
      author: mongoose.Types.ObjectId(user.id),
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
  updateNote: async (parent, { id, content }, { models }) => {
    return await models.Note.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          content,
        },
      },
      {
        new: true,
      }
    )
  },
  signUp: async (parent, { username, email, password }, { models }) => {
    // 이메일 주소 스트링 처리
    email = email.trim().toLowerCase()
    // 비밀번호 해싱
    const hashed = await bcrypt.hash(password, 10)
    const avatar = gravatar(email)

    try {
      const user = await models.User.create({
        username,
        email,
        avatar,
        password: hashed,
      })

      return jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    } catch (error) {
      console.log(error)
      throw new Error("사용자 생성 실패")
    }
  },
  signIn: async (parent, { username, email, password }, { models }) => {
    if (email) {
      email = email.trim().toLowerCase()
    }

    const user = await models.User.findOne({
      $or: [{ email }, { username }],
    })

    if (!user) {
      throw new AuthenticationError("Error signing in")
    }

    const valid = await bcrypt.compare(password, user.password)

    if (!valid) {
      throw new AuthenticationError("Error signing in")
    }

    return jwt.sign({ id: user._id }, process.env.JWT_SECRET)
  },
}
