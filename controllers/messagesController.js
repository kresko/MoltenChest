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

module.exports = {
    getMessagesByThreadById,
    createMessage
}