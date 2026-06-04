# Node.js HW - 03 Validation

This project is an Express.js server with MongoDB integration and request validation, created as a homework assignment.

## Features

- Express server setup
- MongoDB connection via Mongoose
- Basic routing (`/notes`, `/notes/:noteId`)
- CRUD operations for notes (GET, POST, PATCH, DELETE)
- Request body validation with Joi
- Error handling middleware (500 responses)
- 404 handler for unknown routes
- Environment variables support via dotenv (PORT, MONGO_URL configuration)
- CORS enabled
- Request logging with pino-http

## Run project

```bash
npm install
npm start
```

## Environment variables

Create a `.env` file in the root of the project:

```env
PORT=3000
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/db-name
```
