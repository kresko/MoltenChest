const { Router } = require("express");
const messagesRouter = Router();
const messagesController = require("../controllers/messagesController");

messagesRouter.get('/messages/get-messages/:id', messagesController.getMessagesByThreadById);
messagesRouter.post('/create-message/:id', messagesController.createMessage);
messagesRouter.get('/delete-message/:id', messagesController.deleteMessage);

module.exports = messagesRouter;