const { Router } = require('express');
const threadsRouter = Router();
const threadsController = require('../controllers/threadsController');

threadsRouter.get("/", threadsController.getAllThreads);
threadsRouter.get("/add-new-thread", threadsController.renderThreadForm);
threadsRouter.post('/create-thread', threadsController.createThread);

module.exports = threadsRouter;