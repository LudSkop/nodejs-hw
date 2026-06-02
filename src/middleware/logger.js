import pino from 'pino-http';

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
export default logger;
