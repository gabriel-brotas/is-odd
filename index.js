/**
 * @deprecated since version 2 -- 
 */
function isOdd(number) {
    return number % 2 != 0
}

function isEven(number) {
    console.log(number)
    return number % 2 == 0
}

function isNumber(number) {
    console.log("running is numbdssdsder")
    return typeof number == "number"
}


module.exports = {
    isOdd,
    isEven,
    isNumber,
    helloWorld,
    isAOdd
}
