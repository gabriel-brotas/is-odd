function isOdd(number) {
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

function helloWorld() {
    console.log("hello world")
}

module.exports = {
    isOdd,
    isEven,
    isNumber,
    helloWorld
}