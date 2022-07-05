function isOdd(number) {
    console.log(number)
    return number % 2 != 0
}

function isEven(number) {
    console.log(number)
    return number % 2 == 0
}

module.exports = {
    isOdd,
    isEven
}