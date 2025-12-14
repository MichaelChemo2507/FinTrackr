const connection = require('../db/db_config');
const db_structure = require('../db/db_structure');
const aid_methods = require('../utilities/aid_methods');

module.exports = class Repository {
    constructor(table, values = undefined) {
        this.table = table;
        this.values = values;
    }

    async get() {
        const sql = `SELECT * FROM '${this.table}'`;
        const [rows, fields] = await connection.pool.query(sql);
        return rows;
    }

    async create() {
        let columns = aid_methods.convertArrayToString(db_structure.users.columns, "' ,'");
        if (!columns) {
            throw new Error("Invalid parameters");
        }

        const sql = `INSERT INTO '${this.table}'('${columns}') VALUES (?,?,?)`;
        const [rows, fields] = await connection.pool.execute(sql, this.values);
        return rows;
    }

    async update() {
        let columns = aid_methods.convertArrayToString(db_structure.users.columns, "' = ?,'");
        if (!columns) {
            throw new Error("Invalid parameters");
        }

        const sql = `UPDATE FROM '${this.table}' SET '${columns}' = ? WHERE '${db_structure.users.id}' = ?`;
        const [rows, fields] = await connection.pool.execute(sql, this.values);
        return rows;
    }

    async delete() {
        const sql = `DELETE FROM '${this.table}' WHERE '${db_structure.users.id}' = ?`;
        const [rows, fields] = await connection.pool.execute(sql, this.values);
        return rows;
    }
}