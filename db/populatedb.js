#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `

    DROP TABLE users;
    DROP TABLE messages;
    DROP TABLE treads;

    CREATE TABLE IF NOT EXISTS users (
        id_user INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        email VARCHAR(50),
        password VARCHAR(50),
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        guest BOOLEAN,
        admin BOOLEAN
    );

    CREATE TABLE IF NOT EXISTS messages (
        id_messages INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text VARCHAR(255),
        fk_user INT,
        FOREIGN KEY (fk_user) REFERENCES users(id_user)
    );

    CREATE TABLE IF NOT EXISTS treads (
        id_tread INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title VARCHAR(100),
        text VARCHAR(255),
        fk_user INT,
        FOREIGN KEY (fk_user) REFERENCES users(id_user),
        fk_messages INT,
        FOREIGN KEY (fk_messages) REFERENCES messages(id_messages)
    );

    SELECT *
    FROM users;

    SELECT *
    FROM messages;

    SELECT *
    FROM treads;

`;

async function main() {
    console.log("seeding...");
    const dbUrl = `${process.env.DATABASE_URL}`;

    const client = new Client({
        connectionString: dbUrl,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();