'use strict'

const arrays = require('./arrays')
const objects = require('./objects')

const IS_ENV_DEV = () => process.env.NODE_ENV === 'development'
const IS_ENV_TEST = () => process.env.NODE_ENV === 'test'
const IS_ENV_PROD = () => process.env.NODE_ENV === 'production'
const IS_ENV_LOCALHOST = () => process.env.NODE_ENV === 'test-localhost'

module.exports = {
    IS_ENV_DEV,
    IS_ENV_TEST,
    IS_ENV_PROD,
    IS_ENV_LOCALHOST,
    arrays,
    objects
}
