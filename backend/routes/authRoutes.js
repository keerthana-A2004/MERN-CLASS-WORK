// Import Express
const express = require("express");
// Import the controller functions
// These functions handle the logic for user registration and login
// They will be used in the routes to process incoming requests
// The register function will handle user registration
// The login function will handle user login
const { register, login } = require("../controllers/authController");
// Create a router instance
const router = express.Router();

// Route for registration
router.post("/register", register);
// Route for login
router.post("/login", login);

// Export router to use in server.js
module.exports = router;