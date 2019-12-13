'use strict'

const util = require('util')
const Option = require('option-js')

const merge = (obj, toMerge) => Object.assign(obj, toMerge)

const json = obj => JSON.stringify(obj)

const inspect = obj => util.inspect(obj, false, null)

const option = value => Option.of(value)

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

const toError = (error, flog = log => console.error(log)) => {
    if (!error) {
        return { status: 500, body: { type: 'NULL', message: 'Object Error is Null!' } }
    }

    const eresponse = error.response
    const erequest = error.request

    if (eresponse) {
        const status = eresponse.status
        const data = eresponse.data
        const result = {
            status,
            body: inspect(data),
        }

        if (flog) flog(`[ERROR]: Http Response error=${inspect(result)}`)

        return result
    }

    if (erequest) {
        const result = {
            status: 500,
            body: {
                type: 'internal_server',
                message: 'Not Respond: Not Connected!',
            },
        }

        if (flog) flog(`[ERROR] Http Request error=${inspect(result)}`)

        return result
    }

    const res = {
        status: 500,
        body: {
            type: 'internal_server',
            message: error.message || inspect(error).substring(0, 4000),
        },
    }

    if (flog) flog(`[Critical Error]: ${inspect(res)}`)

    return res
}

module.exports = { merge, json, inspect, option, toJson, toBase64, toError }
