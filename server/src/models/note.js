import mongoose from "mongoose"

const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    // Date 자료형으로 createdAt, updatedAt 필드 할당
    timestamps: true,
  }
)

const Note = mongoose.model("Note", noteSchema)

export default Note
