const UsersService = require('../services/users.service');
const DetaledError = require('../utils/detaledError.utils');

module.exports = {
    getAll: async (req, res) => {
        res.status(200).json({ message: "OK", result: UsersService.getAll() });
    },
    create: async (req, res) => {
        const isCreated = UsersService.create(req.body);

        if (!isCreated) {
            throw new DetaledError('SERVER_ERROR', "FAILD TO CREATE!")
        }

        res.status(201).json({ message: "OK" })
    },
    update: async (req, res) => {
        const isUpdated = UsersService.update(req.body, req.params.id);

        if (!isUpdated) {
            throw new DetaledError('SERVER_ERROR', "FAILD TO UPDATE!")
        }

        res.status(204).json({ message: "OK" });
    },
    delete: async (req, res) => {
        const isDeleted = UsersService.delete(req.params.id);

        if (!isDeleted) {
            throw new DetaledError('SERVER_ERROR', "FAILD TO DELETE!")
        }
    }
}