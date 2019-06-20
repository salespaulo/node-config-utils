const { toJson, toBase64 } = require('../objects')

const flatmap = (f, a) => {
    return a.map(f).reduce((xs, ys) => [...xs, ...ys])
}

/*
 * Para utilizar com arrays e funcoes async,
 * o filter do array nao funciona no
 * contexto async.
 */
const asyncFilter = async (asyncPredicate, xs) => {
    return await xs.reduce(async (acc, x) => {
        const result = await asyncPredicate(x)
        if (result) {
            ;(await acc).push(x)
        }
        return acc
    }, Promise.resolve([]))
}

const arrayToJson = array => {
    return array == null ? [] : array.map(toJson)
}

const arrayToBase64 = array => {
    return array == null ? [] : array.map(toBase64)
}

module.exports = {
    flatmap,
    asyncFilter,
    arrayToBase64,
    arrayToJson
}
