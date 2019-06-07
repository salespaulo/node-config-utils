
const { toJson, toBase64 } = require('./objects')

/*
 * Para utilizar com arrays e funcoes async, o filter nao funciona no
 * contexto async.
 */
const asyncFilter = async (asyncPredicate, xs) => {
    return await xs.reduce(async (acc, x) => {
        const result = await asyncPredicate(x)
        if (result ) {
            (await acc).push(x)
        }
        return acc
    }, Promise.resolve([ ]))
}

const arrayToJson = array => {
    return array == null ? [] : array.map(toJson)
}

const arrayToBase64 = array => {
    return array == null ? [] : array.map(toBase64)
}

module.exports = {
    asyncFilter,
    arrayToBase64,
    arrayToJson
}