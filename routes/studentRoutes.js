
const express = require("express");
const router = express.Router();

const {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

// CREATE student
router.post("/", createStudent);

// READ all students
router.get("/", getStudents);

// READ student by ID
router.get("/:id", getStudentById);

// UPDATE student
router.put("/:id", updateStudent);

// DELETE student
router.delete("/:id", deleteStudent);

module.exports = router;
