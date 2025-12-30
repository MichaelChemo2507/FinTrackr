module.exports = callback => async (req, res, next) => {
    try {
        await callback(req, res);

    } catch (error) {
        return next(error);
        
    }
}

