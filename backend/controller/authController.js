//Import user model
const User = require('../models/user');

//for hasing passwords
const bcrypt = require('bcryptjs');

//for token generation
const jwt = require('jsonwebtoken');

//Register a new user
const registerUser = async (req, res) => {
    const{name,email,password,role}= req.body;

    try{
        //Hash the password using bcrypt library
        const hashedPassword = await bcrypt.hash(password, 10);
        const User = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });
        res.status(201).json({
            message: "User registerd successfully",
        })
    }
    catch(error){
        res.status(500),json({
            message: "Error registering user",
            error: error.message,
        });
    }

};
exports.registerUser = async (req, res) => {
  //Get email and password from request body
  const { email, password } = req.body;

  //Find user by email
  //It will search in the database - user schema

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message:
"Invalid credentials",
      });
    }

    //Generate JWT token
    //The jwt sign method is used to create a new token
    //It takes two arguments - payload and secret key
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message:"Error logging in",
      error:error.message,
    });
}
};