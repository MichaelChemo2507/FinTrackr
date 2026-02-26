

module.exports = (error, req, res, next) => { // basic error handler.
    console.log(error.stack);

    if (Object.values(STATUS_CODES).includes(error.status)) {

        if (error.status != STATUS_CODES.SERVER_ERROR) {
            return res.status(error.status).json({
                success: false,
                message: error.message
            });
        }
        
    }

    return res.status(500).json({ success: false, message: "Something whent worng please try again later!" });
}