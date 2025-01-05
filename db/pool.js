const { Pool } = require('pg');
require("dotenv").config();

const dbUrl = `${process.env.DATABASE_URL}`;
const test = '';

module.exports = new Pool({
    connectionString: dbUrl,
});