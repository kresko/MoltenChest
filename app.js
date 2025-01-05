const express = require('express');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require("./passportConfig");
const app = express();
const path = require('node:path');
const assetsPath = path.join(__dirname, 'public');

const messagesRouter = require('./routes/messagesRouter');
const threadsRouter = require('./routes/threadsRouter');
const authRouter = require('./routes/authRouter');

app.use('/', express.static(assetsPath));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
passportConfig(passport);


app.use(express.urlencoded({ extended: true }));
app.use('/', messagesRouter);
app.use('/', threadsRouter);
app.use('/', authRouter);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log("Listening on port " + port);
});