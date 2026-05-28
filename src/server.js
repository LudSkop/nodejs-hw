import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import 'dotenv/config';
//readFile('src/file.txt', 'utf-8')
//  .then((data) => console.log(data))
//  .catch((err) => {
//    console.log('Error reading file:', err);
//  });
const filePath = resolve('src/file.txt'); //підставляє абсолютний шлях до файлу
const fileOperations = async () => {
  const buffer = await readFile(filePath, 'utf-8');
  //const text = buffer.toString();//якщо не вказувати кодування, то повертається буфер, який потрібно конвертувати в строку
  console.log(buffer);
};
fileOperations();

const app = express(); //створює екземпляр вебсерверу
const port = Number(process.env.PORT) || 3000; //встановлює порт для сервера, використовуючи змінну середовища або 3000 за замовчуванням
app.listen(port, () =>
  console.log(`Server successfully started on port ${port}`),
); //вебсервер, який слухає порт 3000 і виводить повідомлення в консоль, коли сервер запущений

//app.use((req, res, next) => {
//  console.log('second middelware');
//  next();
//});
//const cors = (options = {}) => {
//  const middelware = (req, res, next) => {
//    res.setHeader('Access-Control-Allow-Origin', '*');
//    res.setHeader(//
//      'Access-Control-Allow-Methods',
//      'GET, POST, PUT, DELETE, OPTIONS, PATCH',
//    );
//    res.setHeader(
//      'Access-Control-Allow-Headers',
//      'X-Requested-With,Content-Type',
//    );
//    next();
//  };
//  return middelware();
//};
//const  corsMiddleware = cors();
//app.use(corsMiddelware);

app.use(cors()); //зазвичай пишуть так в один рядок, але я розписав функцію для наглядності

const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      ignore: 'pid,hostname',
      translateTime: 'HH:MM:ss',
      message: '{req.method} {req.url}{req.statusCode}-{responsTime}',
      hideObject: true,
    },
  },
});
app.use(logger); //додає логування для кожного запиту
app.use(express.json()); //додає можливість парсити JSON в тілі запиту

app.get('/notes', (req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.json({ message: 'Retrieved all notes' });
});

app.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.json({ message: `Retrieved note with ID: ${noteId}` });
});

app.get('/test-error', () => {
  throw new Error('Simulated server error');
});

app.use((req, res) => {
  res
    .status(404)
    .json({ message: ` ${req.method} ${req.url} Route not found` });
});
app.use((error, req, res, next) => {
  const isProd = process.env.NODE_ENV === 'production';
  const message = isProd ? 'Some error' : error.message;

  res.status(500).json({ message });
});
