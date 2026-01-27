

module.exports = (error, req, res, next) => { // basic error handler.
    console.log(error.stack);

    if (Object.values(STATUS_CODES).includes(error.status)) {
        return res.status(error.status).send(error.message);
    }

    return res.status(500).send(error.message + " Please try again later!");
}