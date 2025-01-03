const pool = require('./pool');
const sql = require('./sql');
const bcrypt = require("bcryptjs");

async function getAllThreads() {
    const { rows } = await pool.query(sql.getAllThreadsSql);

    return rows;
}

async function getThreadByMessageId(messageId) {
    const { rows } = await pool.query(sql.getThreadByMessageId, [messageId]);

    return rows[0];
}

async function getMessagesByTreadId(messageId) {
    const { rows } = await pool.query(sql.getMessagesByThreadById, [messageId]);

    return rows;
}

async function createThread(user, thread) {
    await pool.query(sql.insertThread, [thread.threadTitle, thread.threadMessage, user.id_user]);
}

async function deleteThread(threadId) {
    await pool.query(sql.dropMessageConstraints);
    await pool.query(sql.addMessageConstraints);
    await pool.query(sql.deleteThread, [threadId]);
}

async function insertMessage(user, message, threadId) {
    await pool.query(sql.insertMessage, [message.newMessage, threadId, user.id_user]);
}

async function deleteMessage(messageId) {
    await pool.query(sql.dropMessageConstraints);
    await pool.query(sql.addMessageConstraints);
    await pool.query(sql.deleteMessage, [messageId]);
}

async function registerUser(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await pool.query(sql.registerUser, [user.email, hashedPassword, user.firstName, user.lastName]);
}

async function getUsersById(id) {
    const { rows } = await pool.query(sql.getUsersById, [id]);

    return rows[0];
}

async function getUsersByUsername(email) {
    const { rows } = await pool.query(sql.getUsersByUsername, [email]);

    return rows[0];
}

module.exports = {
    getAllThreads,
    getThreadByMessageId,
    getMessagesByTreadId,
    createThread,
    deleteThread,
    insertMessage,
    deleteMessage,
    registerUser,
    getUsersById,
    getUsersByUsername
}