//import mongoose
const mongoose = require('mongoose');
//Connect to MongoDB//CONNECTDB -> ASYNCRONOUS ARROW FUNCTION

//async uses await -> it will wait for promises to resolve
//like the database connection

//mongoose.connect() -> attempts establish a connection using
//the connection string provided in the environment variable MONGO_URI

//process.env.MONGO_URI -> retrives the MongoDB connection 
//string from environment variables

//await -> waits for the connection to be established
//useNewUrlParser and useUnifiedTopology -> options to avoiavoid deprecation warnings
//Why mongoose?
// Mongoose is an ODM (Object Data Modeling) 
// library for MongoDB and Node.js. 
// It provides a schema-based solution to model your application data.
// It helps in defining schemas, validating data, 
// and provides a powerful query language.
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};
module.exports = connectDB;
//Export the connectDB function
//This allows other files to import and use this function.



//Why mogoose?
//Mongoose is an ODM(object Data Modeling)
//library for MongoDB and Node.js. It provides a schema _based solution to model your application 
//It helps in defining schemas, validating data and provides a powerful query language.
