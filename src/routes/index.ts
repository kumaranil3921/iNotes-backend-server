import { Router } from "express"
import { getNotes, addNote, updateNote, deleteNote } from "../controllers/notes";

const router: Router = Router()

router.get("/notes/get", getNotes)

router.post("/notes/create", addNote)

router.put("/notes/edit/:id", updateNote)

router.delete("/notes/delete/:id", deleteNote)

export default router