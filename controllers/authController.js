const db = require("../db/queryHandler");

async function renderLoginForm() {
    res.render('login');
}

async function loginUser(req, res) {

}

async function renderRegisterForm() {
    res.render('register');
}

async function registerUser(req, res) {

}

module.exports = {
    renderLoginForm,
    loginUser,
    renderRegisterForm,
    registerUser,
}