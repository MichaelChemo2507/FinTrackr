const connection = require('../config/db.config');

module.exports = {
    getAll: async () => {
        const sql = 'SELECT * FROM `users`';
        const [result, fields] = await connection.pool.query({
            sql,
        });
        return result;
    },
    getUserByEmail: async (email) => {
        const sql =
            'SELECT 1 FROM `users` WHERE `email` = ?';
        const [result, fields] = await connection.pool.execute(sql, email);
        return result;
    } ,
    create: async (values) => {
        const sql =
            'INSERT INTO `users`(`user_name`, `email`, `password`, `phone`) VALUES (?,?,?,?)';
        const [result, fields] = await connection.pool.execute(sql, values);
        return result;
    },
    update: async (values) => {
        const sql =
            'UPDATE `users` SET `user_name` = ?,`email` = ?,`password` = ?, `phone` = ? WHERE `id` = ?';
        const [result, fields] = await connection.pool.execute(sql, values);
        return result;
    },
    delete: async (values) => {
        const sql = 'DELETE FROM `users` WHERE `id` = ?';
        const [result, fields] = await connection.pool.execute(sql, values);
        return result;
    }
}
