const express = require("express");
const firstController = require("../controllers/firstController.js");
const firstRouter = express.Router();
 
firstRouter.get("/about", firstController.addUser);
firstRouter.get("/", firstController.getUsers);
 
module.exports = firstRouter;