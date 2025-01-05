const getAllThreadsSql = `
    SELECT t.id_thread, t.title, t.text, u.email, u.admin
    FROM threads t
        INNER JOIN users u on t.fk_user = u.id_user;
`;

const getThreadByMessageId = `
    SELECT m.fk_thread 
    FROM messages m 
    WHERE m.id_messages = ($1);
`;

const insertThread = `
    INSERT INTO threads(title, text, fk_user)
    VALUES ($1, $2, $3);
`;

const deleteThread = `
    DELETE FROM threads WHERE id_thread = ($1);
`;

const insertMessage = `
    INSERT INTO messages(text, fk_thread ,fk_user)
    VALUES ($1, $2, $3);
`;

const deleteMessage = `
    DELETE FROM messages WHERE id_messages = ($1);
`;

const dropMessageConstraints = `
    ALTER TABLE messages DROP CONSTRAINT messages_fk_thread_fkey;
`;

const addMessageConstraints = `
    ALTER TABLE messages
        ADD CONSTRAINT messages_fk_thread_fkey
            FOREIGN KEY (fk_thread) REFERENCES threads(id_thread)
                ON DELETE CASCADE;
`;

const getMessagesByThreadById = `
    SELECT m.id_messages 
        , t.title AS title
         , m.text AS text
         , u.email AS email
         , u.admin AS admin
    FROM messages m
             INNER JOIN threads t on m.fk_thread = t.id_thread
             INNER JOIN users u on m.fk_user = u.id_user
    WHERE m.fk_thread = ($1);
`;

const registerUser = `
    INSERT INTO users(email, password, first_name, last_name, admin)
    VALUES ($1, $2, $3, $4,  false);
`;

const getUsersByUsername = `
    SELECT * FROM users WHERE email = ($1);
`;

const getUsersById = `
    SELECT * FROM users WHERE id_user = ($1);
`;

module.exports = {
    getAllThreadsSql,
    getThreadByMessageId,
    getMessagesByThreadById,
    registerUser,
    getUsersById,
    getUsersByUsername,
    insertThread,
    deleteThread,
    insertMessage,
    deleteMessage,
    dropMessageConstraints,
    addMessageConstraints,
}