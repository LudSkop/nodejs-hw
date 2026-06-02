import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectMongoDB from './db/connectMongoDB.js';
import logger from './middleware/logger.js';
import notFoundHandler from './middleware/notFoundHandler.js';
import errorHandler from './middleware/errorHandler.js';
import notesRouter from './routes/notesRoutes.js';

const filePath = resolve('src/file.txt'); //підставляє абсолютний шлях до файлу
const fileOperations = async () => {
  const buffer = await readFile(filePath, 'utf-8');
  //const text = buffer.toString();//якщо не вказувати кодування, то повертається буфер, який потрібно конвертувати в строку
  console.log(buffer);
};
fileOperations();

const app = express(); //створює екземпляр вебсерверу
app.use(cors()); //зазвичай пишуть так в один рядок, але я розписала функцію для наглядності

app.use(logger); //додає логування для кожного запиту
app.use(express.json()); //додає можливість парсити JSON в тілі запиту
app.use('/notes', notesRouter); //додає маршрути для нотаток, всі маршрути будуть починатися з /notes

app.use(notFoundHandler); //додає обробник для невідомих маршрутів, який повертає 404 помилку
app.use(errorHandler); //додає обробник для помилок, який повертає відповідь з кодом помилки і повідомленням

await connectMongoDB(); //підключається до бази даних перед запуском сервера

const PORT = Number(process.env.PORT) || 3000; //встановлює порт для сервера, використовуючи змінну середовища або 3000 за замовчуванням

app.listen(PORT, () =>
  console.log(`Server successfully started on port ${PORT}`),
); //вебсервер, який слухає порт 3000 і виводить повідомлення в консоль, коли сервер запущений
