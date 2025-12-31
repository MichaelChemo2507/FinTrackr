const Hashing = require('../utils/hashing.utils');
const Users = require('../repositories/users.repositories');
const { STATUS_CODES } = require('http');

module.exports = {
    getAll: async () => {
        let result = await Users.getAll();

        if (!result || result.length == 0) {
            
            const error = new Error("NO RESULT FROM DB!");
            error.status = STATUS_CODES.SERVER_ERROR;
            
            throw error;
        }
        return result;
    },
    create: async (values) => {

        let { userName, email, password, phone } = values;

        const emailResult = await Users.getUserByEmail([email]);

        if (emailResult.length == 1) {

            const error = new Error("EMAIL ALREADY EXISTS!");
            error.status = STATUS_CODES.BAD_REQUEST;

            throw error;
        }

        let result = await Users.create([userName, email, Hashing.encrypt(password), phone]);

        if (!result.affectedRows || result.affectedRows < 0) {

            const error = new Error("FAILD TO CREATE USER!");
            error.status = STATUS_CODES.SERVER_ERROR;

            throw error;
        }

        return true;
    },
    update: async (values, id) => {
        let { userName, email, password, phone } = values;

        let result = await Users.update([userName, email, Hashing.encrypt(password), phone, id]);

        if (!result.affectedRows || result.affectedRows < 0){

            const error = new Error("FAILD TO UPDATE USER!");
            error.status = STATUS_CODES.SERVER_ERROR;

            throw error;
        }

        return true;
    },
    delete: async (id) => {
        let result = await Users.delete([id]);

        if (!result.affectedRows || result.affectedRows < 0){

            const error = new Error("FAILD TO DELETE USER!");
            error.status = STATUS_CODES.SERVER_ERROR;

            throw error;
        }

        return true;
    }
}