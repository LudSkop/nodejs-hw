import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res, next) => {
  if (error instanceof HttpError) {
    const { status, message = 'Some error' } = error;
    return res.status(status).json({ message });
  }
  const isProd = process.env.NODE_ENV === 'production';
  const message = isProd ? 'Some error' : error.message;
  res.status(500).json({ message });
};
