function handleMongooseErrors(e) {
    return {
        errorName: e.name,
        errorPath: e.path,
        errorMessage: e.message,
        errorReason: e.reason
    }
}

module.exports = {
    handleMongooseErrors
}