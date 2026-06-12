Node.js HW - 04 Authentication
A REST API built with Node.js, Express.js, and MongoDB, featuring secure user authentication, request validation, and CRUD operations for notes.
✨ Features
🔐 User registration and login
🪪 JWT-based authentication
🛡️ Protected routes using authentication middleware
🔒 Password hashing with bcrypt
📝 CRUD operations for notes
✅ Request validation with Joi
🗄️ MongoDB integration with Mongoose
⚠️ Centralized error handling
🚫 404 handler for unknown routes
🌐 CORS support
📄 Environment variables configuration with dotenv
📊 HTTP request logging with pino-http
🛠️ Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Joi
JSON Web Token (JWT)
bcrypt
dotenv
cors
pino-http
📦 Installation
Clone the repository and install dependencies:
git clone <repository-url>
cd nodejs-hw-04-auth
npm install
▶️ Run Project
Start the application:
npm start
For development mode:
npm run dev
⚙️ Environment Variables
Create a .env file in the root directory of the project:
PORT=3000
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/db-name
JWT_SECRET=your_jwt_secret

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
