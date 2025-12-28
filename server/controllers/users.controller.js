const UsersService = require('../services/users.service');
const DetaledError = require('../utils/detaledError.utils');

module.exports = {
    getAll: async (req, res) => {
        return UsersService.getAll();
    },
    create: async (req, res) => {
        const isCreated = UsersService.create(req.body);

        if (!isCreated) {
            throw new DetaledError
        }
    }
}