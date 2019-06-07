'use strict'

const chai = require('chai')
const utils = require('../')

describe('Testing:', () => {
    it('Testing all methods:', done => {
        console.log(`Utils IS_ENV_PROD: ${utils.IS_ENV_PROD}`)
        console.log(`Utils IS_ENV_PROD: ${utils.IS_ENV_DEV}`)
        console.log(`Utils Objects: ${utils.objects.inspect({ test: 'testIt' })}`)
        chai.assert(true)
        done()
    })
})
