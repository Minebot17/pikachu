const express = require("express");
const apiRouter = express.Router();
const lentRouter = require("./lentRouter.js");
const authRouter = require("./authRouter.js");

apiRouter.use("/lent", lentRouter);
apiRouter.use("/auth", authRouter);

module.exports = apiRouter;
