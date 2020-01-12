const express = require("express");
const lentController = require("../controllers/lentController.js");
const lentRouter = express.Router();
 
lentRouter.use("/best", lentController.best);
lentRouter.use("/", lentController.hot);
lentRouter.use("/fresh", lentController.fresh);
 
module.exports = lentRouter;