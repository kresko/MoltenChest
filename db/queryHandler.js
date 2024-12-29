const pool = require('./pool');
const sql = require('./sql');

async function getAllThreads() {
    const { rows } = await pool.query(sql.getAllThreadsSql);

    return rows;
}

async function getMessagesByTreadId(messageId) {
    const { rows } = await pool.query(sql.getMessagesByThreadById, [messageId]);

    return rows;
}

async function createThread() {
    await pool.query(); //TODO: Finish auth functionality
}

async function registerUser(user) {
    await pool.query(sql.registerUser, [user.email, user.password, user.firstName, user.lastName]);
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
    registerUser,
    getUsersById,
    getUsersByUsername
}