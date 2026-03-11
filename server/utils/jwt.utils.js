const JWT = require('jsonwebtoken');

module.exports = {
    generateJwt: async (values, expiring) => {
        const accessToken = await JWT.sign(values, process.env.ACCESS_SECRET_TOKEN, { expiresIn: expiring })

        if (!accessToken) {
            const error = new Error("faild to create JWT!");
            error.status = STATUS_CODES.SERVER_ERROR;

            throw error;
        }

        return accessToken;
    },
    verifyJwt: async () => {
        
    },
    updateJWT: async (values, expiring) => {
        
    }
}