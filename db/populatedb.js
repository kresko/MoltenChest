#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
    DROP TABLE messages;
    DROP TABLE threads;
    DROP TABLE users;

    CREATE TABLE IF NOT EXISTS users (
        id_user INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        email VARCHAR(50),
        password VARCHAR(50),
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        guest BOOLEAN,
        admin BOOLEAN
        );

    CREATE TABLE IF NOT EXISTS threads (
        id_thread INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title VARCHAR(100),
        text VARCHAR(255),
        fk_user INT,
        FOREIGN KEY (fk_user) REFERENCES users(id_user)
        );

    CREATE TABLE IF NOT EXISTS messages (
        id_messages INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text VARCHAR(255),
        fk_threads INT,
        FOREIGN KEY (fk_threads) REFERENCES threads(id_thread),
        fk_user INT,
        FOREIGN KEY (fk_user) REFERENCES users(id_user)
        );

    INSERT INTO users (email, password, first_name, last_name, guest, admin)
    VALUES
        ('test.user1@gmail.com', 'Test1234!', 'Test1', 'User', true, false),
        ('test.user2@gmail.com', 'Test1234!', 'Test2', 'User', true, false),
        ('test.user3@gmail.com', 'Test1234!', 'Test3', 'User', true, false);

    INSERT INTO threads (title, text, fk_user)
    VALUES
        ('Test title 1', 'Test text 1', 1),
        ('Test title 2', 'Test text 2', 2),
        ('Test title 3', 'Test text 3', 3);

    INSERT INTO messages (text, fk_threads, fk_user)
    VALUES
        ('Test message 11', 1, 1),
        ('Test message 12', 1, 2),
        ('Test message 13', 1, 3),
        ('Test message 21', 2, 1),
        ('Test message 22', 2, 2),
        ('Test message 23', 2, 3),
        ('Test message 31', 3, 1),
        ('Test message 32', 3, 2),
        ('Test message 33', 3, 3);

    SELECT *
    FROM users;

    SELECT *
    FROM messages;

    SELECT *
    FROM threads;
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