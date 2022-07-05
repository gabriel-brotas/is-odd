/**
 * @deprecated since version 2 -- 
 */
function isOdd(number) {
    console.log(number)
    return number % 2 != 0
}

function isAnOdd(number) {
    console.log(number)
    return number % 2 != 0
}

function isEven(number) {
    console.log(number)
    return number % 2 == 0
}

function isNumber(number) {
    console.log("running is number")
    return typeof number == "number"
}

/**
 * @deprecated since version 1.11.0 -- 
 */
function helloWorld() {
    console.log("hello world")
}

module.exports = {
    isOdd,
    isEven,
    isNumber,
    helloWorld,
    isAOdd
}
