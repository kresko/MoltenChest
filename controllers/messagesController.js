const db = require("../db/queryHandler");

async function getMessagesByThreadById(req, res) {
    const messageId = req.params.id;
    const messages = await db.getMessagesByTreadId(messageId);
    res.render('messages', { messages: messages, user: req.user, threadId: req.params.id });
}

async function createMessage(req, res) {
    const user = req.user;
    const message = req.body;
    const threadId = req.params.id;
    await db.insertMessage(user, message, threadId);
    await getMessagesByThreadById(req, res);
}

async function deleteMessage(req, res) {
    const messageId = req.params.id;
    const threadId = await db.getThreadByMessageId(messageId);
    await db.deleteMessage(messageId);
    const messages = await db.getMessagesByTreadId(threadId);
    res.render('messages', { messages: messages, user: req.user, threadId: threadId });
}

module.exports = {
    getMessagesByThreadById,
    createMessage,
    deleteMessage
}