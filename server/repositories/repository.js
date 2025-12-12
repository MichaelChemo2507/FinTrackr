const connection = require('../db/db_config');
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
        
        const sql = `INSERT INTO '${this.table}'(`${}`) VALUES (?,?,?)`;
        const [rows, fields] = await connection.pool.execute(sql, this.values);
        return rows;
    }
}