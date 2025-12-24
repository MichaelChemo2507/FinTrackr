module.exports = class DetaledError extends Error {
    constructor(errorType, message = "Error occurred!") {
        super(message);
        this.errorType = errorType;
    }
}