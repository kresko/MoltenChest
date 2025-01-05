const { Pool } = require('pg');
require("dotenv").config();

const dbUrl = `${process.env.DATABASE_URL}`;

module.exports = new Pool({
    connectionString: dbUrl
});