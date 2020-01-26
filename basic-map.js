function doubleAll(numbers) {
    // SOLUTION GOES HERE
    var result = [];
    numbers.map(num => {
        result.push(num * 2);
    })
    return result;
}
module.exports = doubleAll;