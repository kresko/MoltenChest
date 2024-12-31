const pool = require('./pool');
const sql = require('./sql');
const bcrypt = require("bcryptjs");

async function getAllThreads() {
    const { rows } = await pool.query(sql.getAllThreadsSql);

    return rows;
}

async function getMessagesByTreadId(messageId) {
    const { rows } = await pool.query(sql.getMessagesByThreadById, [messageId]);

    return rows;
}

async function createThread(user, thread) {
    await pool.query(sql.insertThread, [thread.threadTitle, thread.threadMessage, user.id_user]);
}

async function insertMessage(user, message, threadId) {
    await pool.query(sql.insertMessage, [message.newMessage, threadId, user.id_user]);
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
    getMessagesByTreadId,
    createThread,
    insertMessage,
    registerUser,
    getUsersById,
    getUsersByUsername
}