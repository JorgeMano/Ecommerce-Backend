class AppError extends Error {
    constructor(statusCode, Message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.status = `${statusCode}`.startsWith('4') ? 'error' : 'fail';
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = { AppError };