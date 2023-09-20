class ApiError extends Error {
    construtor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ApiError;
