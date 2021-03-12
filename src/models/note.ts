import { INote } from "./../types/note"
import { model, Schema } from "mongoose"

const noteSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
)

export default model<INote>("Note", noteSchema);