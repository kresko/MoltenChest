const getAllThreadsSql = `
    SELECT t.id_thread, t.title, t.text, u.email
    FROM threads t
        INNER JOIN users u on t.fk_user = u.id_user;
`;

const getMessagesByThreadById = `
    SELECT t.title AS title
         , m.text AS text
         , u.email AS email
    FROM messages m
             INNER JOIN threads t on m.fk_thread = t.id_thread
             INNER JOIN users u on t.fk_user = u.id_user
    WHERE m.fk_thread = ($1);
`;

module.exports = {
    getAllThreadsSql,
    getMessagesByThreadById,
}