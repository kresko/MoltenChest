const express = require('express');
const app = express();
const path = require('node:path');

const messagesRouter = require('./routes/messagesRouter');

app.use(express.urlencoded({ extended: true }));
app.use('/', messagesRouter);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log("Listening on port " + port);
});