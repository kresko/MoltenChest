const { Router } = require('express');
const threadsRouter = Router();
const threadsController = require('../controllers/threadsController');

threadsRouter.get("/", threadsController.getAllThreads);

module.exports = threadsRouter;