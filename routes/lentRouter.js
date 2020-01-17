const express = require("express");
const lentController = require("../controllers/lentController.js");
const lentRouter = express.Router();
 
lentRouter.use("/best", lentController.best);
lentRouter.use("/hot", lentController.hot);
lentRouter.use("/last", lentController.fresh);

module.exports = lentRouter;
