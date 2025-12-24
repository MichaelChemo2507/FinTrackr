const bcrypt = require('bcrypt');

module.exports = {
    encrypt: async (inputText) => {
        const salt = await bcrypt.genSaltSync(process.env.SALT_RANDOMS);
        return await bcrypt.hashSync(inputText, salt);
    }, 
    compare: async (hashedText, inputText) => {
        return await bcrypt.compareSync(inputText, hashedText);
    }
}