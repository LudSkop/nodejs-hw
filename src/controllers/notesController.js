import Note from '../models/note.js';
import createHttpError from 'http-errors';

export const getAllNotes = async (req, res) => {
  const { page = 1, perPage = 10, tag, search } = req.query;
  const filter = {};
  if (tag) {
    filter.tag = tag;
  }
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: 'i' } },
      { content: { $regex: search, $options: 'i' } },
    ];
  }
  const skip = (page - 1) * perPage;
  // const [notes, totalNotes] = await Promise.all([
  //   Note.find().skip(skip).limit(perPage),
  //   Note.countDocuments(),
  // ]); якщо хочемо виконувати запити паралельно, а не послідовно і вони не залежать один від одного, то можна так, але в даному випадку це не критично, бо обидва запити швидкі і не навантажують базу даних
  const notes = await Note.find(filter).skip(skip).limit(perPage);
  const totalNotes = await Note.countDocuments(filter);
  const totalPages = Math.ceil(totalNotes / perPage);
  res.status(200).json({
    notes, // масив нотаток для поточної сторінки, який повертається з бази даних з урахуванням пагінації (skip і limit)
    totalNotes, //загальна кількість нотаток в колекції
    totalPages, //загальна кількість сторінок
    page, //поточна сторінка, яка була запрошена клієнтом
    perPage,
  });
};

export const getNoteById = async (req, res) => {
  const { noteId } = req.params;
  //const note = await Note.findOne({ _id: noteId });
  const note = await Note.findById(noteId); //можна так, якщо noteId є валідним ObjectId, інакше буде помилка CastError
  if (!note) {
    throw createHttpError(404, `Note with id ${noteId} not found`);
    //const error = new Error(`Note with id ${noteId} not found`);
    //error.status = 404;
    //throw new Error();
  }
  res.status(200).json(note);
};

export const createNote = async (req, res) => {
  const newNote = await Note.create(req.body);
  res.status(201).json(newNote);
};

export const updateNote = async (req, res) => {
  const { noteId } = req.params;
  const updatedNote = await Note.findOneAndUpdate({ _id: noteId }, req.body, {
    returnDocument: 'after',
    runValidators: true,
  });
  if (!updatedNote) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json(updatedNote);
};

export const deleteNote = async (req, res) => {
  const { noteId } = req.params;
  const deletedNote = await Note.findOneAndDelete({ _id: noteId });
  if (!deletedNote) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json(deletedNote);
};
