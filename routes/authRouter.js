const express = require("express");
const authController = require("../controllers/authController.js");
const authRouter = express.Router();
const jsonParser = express.json();

authRouter.post("/login", jsonParser, authController.login);
authRouter.post("/logout", jsonParser, authController.logout);
authRouter.post("/register", jsonParser, authController.register);

module.exports = authRouter;
