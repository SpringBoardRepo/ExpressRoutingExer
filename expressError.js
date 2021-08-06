class ExpressError extends Error {
    constructor(msg, statusCode) {
        super();
        this.msg = msg;
        this.statusCode = statusCode;
        console.error(this.stack)
    }


}

module.exports = ExpressError