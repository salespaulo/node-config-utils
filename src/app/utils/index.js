'use strict'

const IS_ENV_DEV = () => process.env.NODE_ENV === 'development'
const IS_ENV_PROD = () => process.env.NODE_ENV === 'production'

module.exports = {
    IS_ENV_DEV,
    IS_ENV_PROD
}
