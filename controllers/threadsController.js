const db = require("../db/queryHandler");

async function getAllThreads(req, res) {
    const threads = await db.getAllThreads();
    res.render('threads', { threads: threads, user: req.user });
}

async function renderThreadForm(req, res) {
    res.render('thread', { user: req.user });
}

async function createThread(req, res) {
    const user = req.user;
    const thread = req.body;
    await db.createThread(user, thread);

    return res.redirect('/');
}

async function deleteThread(req, res) {
    const threadId = req.params.id;
    await db.deleteThread(threadId);

    return res.redirect('/');
}

module.exports = {
    getAllThreads,
    renderThreadForm,
    createThread,
    deleteThread
}