function findMean(nums) {

    if (nums.length === 0) return 0;
    return nums.reduce(function (acc, num) {
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

function findMedian(nums) {

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    }
    else {
        median = nums[middleIndex];
    }
    return median;
}

function countTheNumberFrequency(array) {

    return array.reduce((acc, next) => {
        if (acc[next]) {
            acc[next]++;
        }
        else {
            acc[next] = 1;
        }
        return acc;
    }, {})

}

function findMode(arr) {
    let nums = countTheNumberFrequency(arr)
    let count = 0;
    let mostCount;
    for (let key in nums) {
        if (nums[key] > count) {
            mostCount = key;
            count = nums[key];
        }
    }
    return +mostCount;
}

module.exports = { findMean, convertAndValidateNumsArray, findMedian, findMode }