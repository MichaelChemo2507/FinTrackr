const Hashing = require('../utils/hashing.utils');
const Users = require('../repositories/users.repositories');
const DetaledError = require('../utils/detaledError.utils');

module.exports = {
    getAll: async () => {
        let result = await Users.getAll();

        if (!result || result.length == 0)
            throw new DetaledError("SERVER_ERROR", "NO RESULT FROM DB!");

        return result;
    },
    create: async (values) => {

        let { userName, email, password, phone } = values;

        const emailResult = await Users.getUserByEmail([email]);

        if (emailResult.length == 1)
            throw new DetaledError("CLIENT_ERROR", "EMAIL ALREADY EXISTS!")

        let result = await Users.create([userName, email, Hashing.encrypt(password), phone]);

        if (!result.affectedRows || result.affectedRows < 0)
            throw new DetaledError('DB_ERROR', 'FAILD TO CREATE USER!');

        return true;
    },
    update: async (values, id) => {
        let { userName, email, password, phone } = values;

        let result = await Users.update([userName, email, Hashing.encrypt(password), phone, id]);

        if (!result.affectedRows || result.affectedRows < 0)
            throw new DetaledError('DB_ERROR', 'FAILD TO UPDATE USER!');

        return true;
    },
    delete: async (id) => {
        let result = await Users.delete([id]);

        if (!result.affectedRows || result.affectedRows < 0)
            throw new DetaledError('DB_ERROR', 'FAILD TO DELETE USER!');

        return true;
    }
}