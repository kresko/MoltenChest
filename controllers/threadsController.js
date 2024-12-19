const db = require("../db/queryHandler");

async function getAllThreads(req, res) {
    const threads = await db.getAllThreads();
    res.render('threads', { threads: threads });
}

module.exports = {
    getAllThreads
}