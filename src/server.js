import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectMongoDB from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import notesRouter from './routes/notesRoutes.js';
import { errors } from 'celebrate';
import { authRouter } from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors());
app.use(cookieParser());

app.use(logger);
app.use(express.json());
app.use(authRouter);
app.use(notesRouter);

app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

await connectMongoDB();

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () =>
  console.log(`Server successfully started on port ${PORT}`),
);
