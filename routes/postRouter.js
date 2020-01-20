const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/postController.js");
const jsonParser = express.json();

postRouter.use("/add", jsonParser, postController.add);


module.exports = postRouter;
