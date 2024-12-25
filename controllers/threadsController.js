const db = require("../db/queryHandler");

async function getAllThreads(req, res) {
    const threads = await db.getAllThreads();
    res.render('threads', { threads: threads });
}

async function createThread(req, res) {
    await db.createThread();
}

module.exports = {
    getAllThreads,
    createThread
}