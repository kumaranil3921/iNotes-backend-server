import { Response, Request } from "express"
import { INote } from "./../../types/note"
import Note from "../../models/note"

const getNotes = async (req: Request, res: Response): Promise<void> => {
  try {
    const notes: INote[] = await Note.find();
    res.status(200).json({ notes });
  } catch (error) {
    throw error
  }
}

const addNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<INote, "title" | "description">

    const note: INote = new Note({
      title: body.title,
      description: body.description
    })

    const newNote: INote = await note.save()
    const allNotes: INote[] = await Note.find()

    res
      .status(201)
      .json({ message: "Todo added", todo: newNote, todos: allNotes })
  } catch (error) {
    throw error
  }
}

const updateNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req
    const updateNote: INote | null = await Note.findByIdAndUpdate(
      { _id: id },
      body
    )
    const allNotes: INote[] = await Note.find()
    res.status(200).json({
      message: "Todo updated",
      note: updateNote,
      notes: allNotes,
    })
  } catch (error) {
    throw error
  }
}

const deleteNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedNote: INote | null = await Note.findByIdAndRemove(
      req.params.id
    )
    const allNotes: INote[] = await Note.find()
    res.status(200).json({
      message: "Todo deleted",
      note: deletedNote,
      notes: allNotes,
    })
  } catch (error) {
    throw error
  }
}

export { getNotes, addNote, updateNote, deleteNote }