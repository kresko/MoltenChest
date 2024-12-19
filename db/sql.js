const getAllThreadsSql = `
    SELECT t.title, t.text, u.email
    FROM threads t
        INNER JOIN users u on t.fk_user = u.id_user;
`;

module.exports = {
    getAllThreadsSql,
    getAllThreads
}