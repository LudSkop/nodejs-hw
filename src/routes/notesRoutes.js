import { Router } from 'express';
import { celebrate } from 'celebrate';
import { authenticate } from '../middleware/authenticate.js';
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';
import {
  createNoteSchema,
  noteIdSchema,
  updateNoteSchema,
  getAllNotesSchema,
} from '../validations/notesValidation.js';

const notesRouter = Router();
notesRouter.use(authenticate);

notesRouter.get('/notes', celebrate(getAllNotesSchema), getAllNotes);

notesRouter.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);

notesRouter.post(
  '/notes',
  celebrate(createNoteSchema, { abortEarly: false }),
  createNote,
);

notesRouter.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);

notesRouter.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);

export default notesRouter;
