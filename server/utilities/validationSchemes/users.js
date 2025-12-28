const Joi = require('joi');
module.exports = {
    create: Joi.object({
        userName: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        phone: Joi.string().pattern(/^[0-9]{10,15}$/).optional()
    }),
    update: Joi.object({
        userName: Joi.string().min(3),
        email: Joi.string().email(),
        password: Joi.string().min(8),
        phone: Joi.string().pattern(/^[0-9]{10,15}$/)
    }).min(1),
}