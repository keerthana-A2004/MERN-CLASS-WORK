
//Express - HTTP server framework
//bcrypt - Password hashing library
const express = require("express");

const{ registerUser, login } = require("../controller/authController");
//create new router instance
const router = express.Router();
router.post("/register",registerUser);
router.post("/login",login);
module.exports = router;


