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
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

noteSchema.pre('findOneAndUpdate', function () {
  this.setOptions({ runValidators: true, returnDocument: 'after' });
});

export const Note = model('Note', noteSchema);
//export const noteSortFields = ['tag', 'search'];
