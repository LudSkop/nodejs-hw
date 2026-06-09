import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      default: '',
      trim: true,
      required: false,
    },
    tag: {
      type: String,
      required: false,
      trim: true,
      enum: TAGS,
      default: 'Todo',
      index: true,
    },
  },
  { versionKey: false, timestamps: true },
);

noteSchema.pre('faindOneAndUpdate', function () {
  this.options({ runValidators: true, returnDocument: 'after' });
});

const Note = model('note', noteSchema);
//export const noteSortFields = ['tag', 'search'];
export default Note;
