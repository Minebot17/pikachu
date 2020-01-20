const express = require("express");
const apiRouter = express.Router();
const lentRouter = require("./lentRouter.js");
const authRouter = require("./authRouter.js");
const userRouter = require("./userRouter.js");
const postRouter = require("./postRouter.js");

apiRouter.use("/lent", lentRouter);
apiRouter.use("/auth", authRouter);
apiRouter.use("/user", userRouter);
apiRouter.use("/post", postRouter);

module.exports = apiRouter;
