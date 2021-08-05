function findMean(nums) {

    if (nums.length === 0) return 0;
    return nums.reduce(function (acc, num) {
        console.log(acc, num)
        return acc + num;
    }) / nums.length;
}

function convertAndValidateNumsArray(numAsString) {
    let result = [];
    for (let i = 0; i < numAsString.length; i++) {
        let number = Number(numAsString[i]);

        if (Number.isNaN(number)) {
            return new Error(`The value at ${numAsString[i]} is not a number`);
        }
        result.push(number);
    }
    return result;
}

module.exports = { findMean, convertAndValidateNumsArray }