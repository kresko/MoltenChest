const getAllThreadsSql = `
    SELECT t.id_thread, t.title, t.text, u.email
    FROM threads t
        INNER JOIN users u on t.fk_user = u.id_user;
`;

const insertThread = `
    INSERT INTO threads(title, text, fk_user)
    VALUES ($1, $2, $3);
`;

// provjeri
const insertMessage = `
    INSERT INTO messages(text, fk_thread ,fk_user)
    VALUES ($1, $2, $3);
`

const getMessagesByThreadById = `
    SELECT t.title AS title
         , m.text AS text
         , u.email AS email
    FROM messages m
             INNER JOIN threads t on m.fk_thread = t.id_thread
             INNER JOIN users u on m.fk_user = u.id_user
    WHERE m.fk_thread = ($1);
`;

const registerUser = `
    INSERT INTO users(email, password, first_name, last_name, guest, admin)
    VALUES ($1, $2, $3, $4, true, false);
`;

const getUsersByUsername = `
    SELECT * FROM users WHERE email = ($1);
`;

const getUsersById = `
    SELECT * FROM users WHERE id_user = ($1);
`;

module.exports = {
    getAllThreadsSql,
    getMessagesByThreadById,
    registerUser,
    getUsersById,
    getUsersByUsername,
    insertThread,
    insertMessage
}