const getEnv = require("./getEnv");

const env = getEnv()

module.exports = {}

const e = module.exports

e.port = env.PORT || 8000
