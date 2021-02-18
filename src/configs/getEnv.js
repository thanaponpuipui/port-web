function getEnv () {
    if (process.env.NODE_ENV !== "production") {
        require("dotenv").config();
    }
    return process.env
}

module.exports = getEnv