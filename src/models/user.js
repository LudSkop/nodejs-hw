import { Schema, model } from 'mongoose';

export const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    avatar: {
      type: String,
      required: false,
      default: 'https://ac.goit.global/fullstack/react/default-avatar.jpg',
    },
  },
  { versionKey: false, timestamps: true },
);

userSchema.pre('save', function (next) {
  if (!this.username) {
    this.username = this.email;
  }
  next();
});

// Перевизначаємо метод toJSON
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password; // Видаляємо поле password з об'єкта користувача
  return userObject;
};

userSchema.pre('findOneAndUpdate', function () {
  this.setOptions({ runValidators: true, returnDocument: 'after' });
});

export const User = model('User', userSchema);
