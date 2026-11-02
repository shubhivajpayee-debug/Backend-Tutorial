# Backend Tutorial – Student CRUD API

A RESTful backend application built using **Node.js, Express.js, and MongoDB**. This project demonstrates CRUD (Create, Read, Update, Delete) operations for managing student records.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman

## Project Structure
```text
Backend-Tutorial/
├── config/
├── controllers/
│   └── studentController.js
├── models/
│   └── Student.js
├── routes/
│   └── studentRoutes.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Features
- Create a new student
- Retrieve all students
- Retrieve a student by ID
- Update student details
- Delete a student
- Store student records in MongoDB

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/students` | Create student |
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get student by ID |
| PUT | `/api/students/:id` | Update student |
| DELETE | `/api/students/:id` | Delete student |

## Installation and Setup

1. Clone the repository:
   `git clone https://github.com/shubhivajpayee-debug/Backend-Tutorial.git`

2. Navigate into the project:
   `cd Backend-Tutorial`

3. Install dependencies:
   `npm install`

4. Create a `.env` file and configure:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

5. Start the server:
   `node server.js`

## API Testing
All CRUD endpoints were tested using Postman.

## Author
Student Backend Development Project