const { log } = require("console")
const { STATUS_CODES } = require("http")

module.exports = (error, req, res, next) => { // basic error handler.
    console.log(error.stack);

    Object.values(STATUS_CODES).forEach(code => {
        if (code === error.status)
            return res.status(code).send(error.message); // need to add an error html file (optional).
    })

    return res.status(500).send(error.message + " Please try again later!");
}