const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();
const jsonParser = express.json();

userRouter.get("/lk", jsonParser, userController.lk);
//userRouter.post("/register", jsonParser, userController.register);

module.exports = userRouter;
