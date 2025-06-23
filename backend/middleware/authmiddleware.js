
const jwt = require("jsonwebtoken");
const protect = (req, res, next) =>{
    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401)
        .json({ message: "No token provided,authorization deied"});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = drcoded;
        next();
    }
    catch(error){
        return res.status(401).json({ message:"Token is not valid"});
    }
};
module.exports = { protect };