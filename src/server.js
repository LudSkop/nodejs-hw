import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectMongoDB from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import notesRouter from './routes/notesRoutes.js';
import { errors } from 'celebrate';

const app = express(); //створює екземпляр вебсерверу
app.use(cors()); //зазвичай пишуть так в один рядок, але я розписала функцію для наглядності

app.use(logger); //додає логування для кожного запиту
app.use(express.json()); //додає можливість парсити JSON в тілі запиту
app.use(notesRouter); //додає маршрути для нотаток, всі маршрути будуть починатися з /notes

app.use(notFoundHandler); //додає обробник для невідомих маршрутів, який повертає 404 помилку
app.use(errors()); //додає обробник для помилок валідації, який повертає 400 помилку з повідомленням про помилку валідації
app.use(errorHandler); //додає обробник для помилок, який повертає відповідь з кодом помилки і повідомленням

await connectMongoDB(); //підключається до бази даних перед запуском сервера

const PORT = Number(process.env.PORT) || 3000; //встановлює порт для сервера, використовуючи змінну середовища або 3000 за замовчуванням

app.listen(PORT, () =>
  console.log(`Server successfully started on port ${PORT}`),
); //вебсервер, який слухає порт 3000 і виводить повідомлення в консоль, коли сервер запущений
