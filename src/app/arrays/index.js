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

const chunk = (array, n) =>
    array.slice(0, ((array.length + n - 1) / n) | 0).map((c, i) => array.slice(n * i, n * i + n))

module.exports = {
    chunk,
    flatmap,
    asyncFilter,
    arrayToBase64,
    arrayToJson
}
