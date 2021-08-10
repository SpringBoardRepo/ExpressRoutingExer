const { findMean, findMedian, findMode } = require('./helper')

let nums;
beforeEach(() => {
    nums = [23, 45, 53, 64, 85];
})
test('should return the mean', function () {
    expect(findMean(nums)).toBe(54);
})

test('should return Median', function () {
    expect(findMedian(nums)).toBe(53);
})

test('should return Mode', function () {
    const nums = [1, 2, 1, 2, 1, 1]
    expect(findMode(nums)).toEqual(1);
})