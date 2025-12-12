const connection = require('../db/db_config');

async function getAllUsers(values) {
    const sql = 'SELECT * FROM `users`';
    const [rows, fields] = await connection.pool.execute(sql);
    return rows;
}
async function createUser(values) {
    const sql = 'INSERT INTO `users`(`user_name`,`email`,`password`) VALUES (?,?,?)';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
}
async function updateUser(values) {
    const sql = 'INSERT INTO `users`(`user_name`,`email`,`password`) VALUES (?,?,?)';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
}
async function createUser(values) {
    const sql = 'INSERT INTO `users`(`user_name`,`email`,`password`) VALUES (?,?,?)';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
}
async function createUser(values) {
    const sql = 'INSERT INTO `users`(`user_name`,`email`,`password`) VALUES (?,?,?)';
    const [rows, fields] = await connection.pool.execute(sql, values);
    return rows;
}
module.exports = {
    createUser: createUser,

}