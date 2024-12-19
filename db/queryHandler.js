const pool = require('./pool');
const sql = require('./sql');

async function getAllThreads() {
    const { rows } = await pool.query(sql.getAllThreadsSql);

    return rows;
}

async function getMessagesByTreadId() {

}

module.exports = {
    getAllThreads
}