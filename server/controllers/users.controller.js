const UsersService = require('../services/users.service');
const DetaledError = require('../utils/detaledError.utils');

module.exports = {
    getAll: async (req, res) => {
        return res.status(200).json({ message: "OK", result: await UsersService.getAll() });
    },
    create: async (req, res) => {
        const isCreated = await UsersService.create(req.body);

        if (!isCreated) {
            throw new DetaledError('SERVER_ERROR', "FAILD TO CREATE!")
        }

        return res.status(201).json({ message: "OK" })
    },
    update: async (req, res) => {
        const isUpdated = await UsersService.update(req.body, req.params.id);

        if (!isUpdated) {
            throw new DetaledError('SERVER_ERROR', "FAILD TO UPDATE!")
        }

        return res.status(204).json({ message: "OK" });
    },
    delete: async (req, res) => {
        const isDeleted = await UsersService.delete(req.params.id);

        if (!isDeleted) {
            throw new DetaledError('SERVER_ERROR', "FAILD TO DELETE!")
        }

        return res.status(204).json({ message: "OK" });
    }
}