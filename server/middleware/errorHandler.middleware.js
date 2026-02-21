

module.exports = (error, req, res, next) => { // basic error handler.
    console.log(error.stack);

    if (Object.values(STATUS_CODES).includes(error.status)) {

        if (error.status != STATUS_CODES.SERVER_ERROR) {
            return res.status(error.status).send(error.message);
        }
        
    }

    return res.status(500).send("Something whent worng please try again later!");
}