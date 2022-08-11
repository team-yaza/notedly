const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    // reference the author's object ID
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    favoriteCount: {
      type: Number,
      default: 0,
    },
    favoritedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    // Assigns createdAt and updatedAt fields with a Date type
    timestamps: true,
  }
)

const Note = mongoose.model("Note", noteSchema)

module.exports = Note
