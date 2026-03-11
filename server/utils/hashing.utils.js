const bcrypt = require('bcrypt');

module.exports = {
    encrypt: async (inputText) => {
        const salt = await bcrypt.genSaltSync(Number(process.env.SALT_ROUNDS));
        return await bcrypt.hashSync(inputText, salt);
    },
    compare: async (inputText, hashedText) => {
        return await bcrypt.compareSync(inputText, hashedText);
    }
}