const { Router } = require('express');
const threadsRouter = Router();
const threadsController = require('../controllers/threadsController');

threadsRouter.get("/", threadsController.getAllThreads);
threadsRouter.get('/create-thread', threadsController.createThread);

module.exports = threadsRouter;