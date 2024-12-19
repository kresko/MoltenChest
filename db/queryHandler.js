const pool = require('./pool');
const sql = require('./sql');

async function getAllThreads() {
    return sql.getAllThreads;
}

async function getMessagesByTreadId() {

}

module.exports = {
    getAllThreads
}