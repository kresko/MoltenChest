const db = require("../db/queryHandler");

async function renderLoginForm(req, res) {
    res.render('login');
}

async function loginUser(req, res) {

}

async function logoutUser(req, res) {

}

async function renderRegisterForm(req, res) {
    res.render('register');
}

async function registerUser(req, res) {

}

module.exports = {
    renderLoginForm,
    loginUser,
    logoutUser,
    renderRegisterForm,
    registerUser,
}