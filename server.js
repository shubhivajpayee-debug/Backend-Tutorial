
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware to read JSON data
app.use(express.json());
const studentRoutes = require("./routes/studentRoutes");
app.use("/api/students", studentRoutes);

// Test API route
app.get("/", (req, res) => {
    res.send("Backend Server is Running Successfully!");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully!");

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error.message);
    });
