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
    await pool.query();
}

async function registerUser() {

}

module.exports = {
    getAllThreads,
    getMessagesByTreadId,
    createThread
}