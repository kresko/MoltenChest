const db = require("../db/queryHandler");

async function getMessagesByThreadById(req, res) {
    const messageId = req.params.id;
    const messages = await db.getMessagesByTreadId(messageId);
    res.render('messages', { messages: messages });
}

module.exports = {
    getMessagesByThreadById
}