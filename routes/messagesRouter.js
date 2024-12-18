const { Router } = require("express");
const messagesRouter = Router();

messagesRouter.use("/", messagesRouter);

module.exports = messagesRouter;