const Hashing = require('../utils/hashing.utils');
const Users = require('../repositories/users.repositories');
const usersRepositories = require('../repositories/users.repositories');
const jwtMethods = require('../utils/jwt.utils');

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

            const error = new Error("email alraedy exists!");
            error.status = STATUS_CODES.BAD_REQUEST;

            throw error;
        }

        let result = await Users.create([userName, email, await Hashing.encrypt(password), phone]);

        if (!result.affectedRows || result.affectedRows < 0) {

            const error = new Error("faild to create user!");
            error.status = STATUS_CODES.SERVER_ERROR;

            throw error;
        }

        return true;
    },
    update: async (values, id) => {
        let { userName, email, password, phone } = values;

        let result = await Users.update([userName, email, Hashing.encrypt(password), phone, id]);

        if (!result.affectedRows || result.affectedRows < 0) {

            const error = new Error("faild to update user!");
            error.status = STATUS_CODES.SERVER_ERROR;

            throw error;
        }

        return true;
    },
    delete: async (id) => {
        let result = await Users.delete([id]);

        if (!result.affectedRows || result.affectedRows < 0) {

            const error = new Error("faild to delete user!");
            error.status = STATUS_CODES.SERVER_ERROR;

            throw error;
        }

        return true;
    },
    login: async (values) => {
        const { userName, password } = values;

        const authenticateResult = usersRepositories.login([userName, await Hashing.encrypt(password)]);

        console.log(authenticateResult);

        if (!authenticateResult || authenticateResult.length <= 0) {

            const error = new Error("faild to login!");
            error.status = STATUS_CODES.BAD_REQUEST;

            throw error;
        }

        const accessToken = jwtMethods.generateJwt({ USER_ID: authenticateResult[0].id }, 60 * 60 * 24);

        return accessToken;
    }
}