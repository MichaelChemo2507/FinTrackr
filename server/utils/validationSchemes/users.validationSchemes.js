const Joi = require('joi');
module.exports = {
    create: Joi.object({
        userName: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(30).required(),
        phone: Joi.string().pattern(/^[0-9]{10,15}$/).optional()
    }),
    update: Joi.object({
        email: Joi.string().email(),
        userName: Joi.string().min(3).max(30),
        password: Joi.string().min(8).max(30),
        phone: Joi.string().pattern(/^[0-9]{10,15}$/)
    }).min(1),

    id: Joi.object({
        id: Joi.number().integer().positive().required()
    })
}