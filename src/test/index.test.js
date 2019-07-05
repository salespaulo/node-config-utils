'use strict'

const chai = require('chai')
const utils = require('../')
const axios = require('axios')

describe('Testing:', () => {
    it('Testing all methods:', done => {
        console.log(`Utils IS_ENV_PROD: ${utils.IS_ENV_PROD}`)
        console.log(`Utils IS_ENV_PROD: ${utils.IS_ENV_DEV}`)
        console.log(`Utils Objects: ${utils.objects.inspect({ test: 'testIt' })}`)
        chai.assert(true)
        done()
    })
    it('Testing Arrays chunk OK', done => {
        try {
            const d = utils.arrays.chunk([1, 2, 3, 4, 5, 6, 7], 2)
            console.log('>>>>>>>', d)
            done()
        } catch (e) {
            done(e)
        }
    })
    it('Testing new Error() toError OK', done => {
        try {
            const error = new Error(`ERROR Testing toError!`)
            const returns = utils.objects.toError(error)
            console.log('>>>>>', returns)
            done()
        } catch (e) {
            done(e)
        }
    })
    it('Testing MOCK Axios Response toError OK', done => {
        try {
            const error = {
                response: {
                    status: 404,
                    data: { messsage: `ERROR Testing toError NOT FOUND Response Error!` }
                }
            }
            const returns = utils.objects.toError(error)
            console.log('>>>>>', returns)
            done()
        } catch (e) {
            done(e)
        }
    })
    it('Testing MOCK Axios Not Respond toError OK', done => {
        try {
            const error = {
                request: {
                    status: 404,
                    data: { messsage: `ERROR Testing toError NOT FOUND Response Error!` }
                }
            }
            const returns = utils.objects.toError(error)
            console.log('>>>>>', returns)
            done()
        } catch (e) {
            done(e)
        }
    })
    xit('Testing Axios toError NOT CONECTED', done => {
        try {
            let error = null
            axios
                .get('http://google.com.br')
                .then(data => {
                    done(utils.objects.inspect(data))
                })
                .catch(e => {
                    error = e
                    const returns = utils.objects.toError(error)
                    console.log('>>>>>', returns)
                    done()
                })
        } catch (e) {
            done(e)
        }
    })
    it('Testing Axios toError NOT FOUND', done => {
        try {
            let error = null
            axios
                .get('http://google.com.br/lala/lele')
                .then(data => {
                    done(utils.objects.inspect(data))
                })
                .catch(e => {
                    error = e
                    const returns = utils.objects.toError(error)
                    console.log('>>>>>', returns)
                    done()
                })
        } catch (e) {
            done(e)
        }
    })
})
