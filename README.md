Node.js HW - 05 Mail and Image Upload
A REST API built with Node.js, Express.js, and MongoDB, featuring secure user authentication, email integration, image uploads, request validation, and CRUD operations for notes.
✨ Features
🔐 User registration and login
🪪 Session-based authentication with access and refresh tokens
🛡️ Protected routes using authentication middleware
🔒 Password hashing with bcrypt
📧 Email sending functionality
🖼️ Image upload and storage support
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
bcrypt
dotenv
cors
pino-http
Cloudinary
Multer
Nodemailer
📦 Installation

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


APP_DOMAIN=http://localhost:3000

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_FROM=your_email@gmail.com

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

```
