const express = require("express");
const authController = require("../controllers/authController.js");
const authRouter = express.Router();

const bodyParser = require("body-parser");
urlencodedparser = bodyParser.urlencoded({extended: false});
 
authRouter.post("/login", urlencodedparser, authController.login);
authRouter.post("/register", urlencodedparser, authController.register);
 
module.exports = authRouter;