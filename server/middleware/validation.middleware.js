const Joi = require("joi");

module.exports = (schema, property = 'body') => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req[property], {
            abortEarly: false,
            stripUnknown: true
        });
        if (error) {
            error.status = STATUS_CODES.BAD_REQUEST;
            next(error);
        }

        req[property] = value;
        next();

    }
}