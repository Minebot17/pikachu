const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();
const jsonParser = express.json();

userRouter.get("/lk", jsonParser, userController.lk);
userRouter.get("/logout", jsonParser, userController.logout);

module.exports = userRouter;
