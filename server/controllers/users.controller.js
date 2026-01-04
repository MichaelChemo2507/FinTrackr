const UsersService = require('../services/users.service');

module.exports = {
    getAll: async (req, res) => {
        return res.status(STATUS_CODES.OK).json({ message: "OK", result: await UsersService.getAll() });
    },
    create: async (req, res) => {
        
        const isCreated = await UsersService.create(req.body);

        if (!isCreated) {

            const error = new Error("faild to create!");
            error.status = STATUS_CODES.SERVER_ERROR;

            throw error;
        }

        return res.status(STATUS_CODES.CREATED).json({ message: "OK" })
    },
    update: async (req, res) => {
        const isUpdated = await UsersService.update(req.body, req.params.id);

        if (!isUpdated) {

            const error = new Error("faild to update!");
            error.status = STATUS_CODES.SERVER_ERROR;

            throw error;
        }

        return res.status(STATUS_CODES.NO_CONTENT).json({ message: "OK" });
    },
    delete: async (req, res) => {
        const isDeleted = await UsersService.delete(req.params.id);

        if (!isDeleted) {

            const error = new Error("faild to delete!");
            error.status = STATUS_CODES.SERVER_ERROR;

            throw error;
        }

        return res.status(STATUS_CODES.NO_CONTENT).json({ message: "OK" });
    }
}