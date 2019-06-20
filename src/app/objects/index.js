'use strict'

const util = require('util')

const merge = (obj, toMerge) => Object.assign(obj, toMerge)

const json = obj => JSON.stringify(obj)

const inspect = obj => util.inspect(obj, false, null)

const toJson = base64 => {
    if (!base64) return null

    try {
        const buffer = new Buffer(base64, 'base64')
        const utf8 = buffer.toString('utf8')

        return JSON.parse(utf8)
    } catch (e) {
        throw e
    }
}

const toBase64 = json => {
    try {
        const stringify = JSON.stringify(json)
        const buffer = Buffer.from(stringify)

        return buffer.toString('base64')
    } catch (e) {
        throw e
    }
}

module.exports = { merge, json, inspect, toJson, toBase64 }
