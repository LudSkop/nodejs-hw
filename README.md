# Node.js HW - 02 MongoDB

This project is an Express.js server with MongoDB integration created as a homework assignment.

## Features

- Express server setup
- MongoDB connection via Mongoose
- Basic routing (`/notes`, `/notes/:noteId`)
- CRUD operations for notes (GET, POST, PATCH, DELETE)
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
