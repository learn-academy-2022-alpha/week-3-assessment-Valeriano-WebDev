// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
/** Pseudo
 * Understand and define Fibonacci sequence
 * According to https://www.livescience.com/37470-fibonacci-sequence.html#:~:text=The%20Fibonacci%20sequence%20is%20a,2%3D%20Xn%2B1%20%2B%20Xn it is a sequence of numbers where each number is the sum of the previous two before it.
 * Create a function giving it a name of fiqSeq
 * We initialize an array with the values [1,1]. This is due to the condition we are given that the number that the function takes in must be greater than 2
 * We use a for loop to iterate over our array until the number of elements in the array is  - 1 than the passed in argument
 * This is to ensure that the length of the array is equal to the number that will be passed into the function.
 * After each iteration we push the value of the current number i added onto the previously pushed number i-1
 * The return will be the completed fibonacci sequence array up to the number that was passed in.
 */

// a) Create a test with expect statements for each of the variables provided.
describe("fibSeq", () => {

    it("takes in takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {

        const example =  6
//      Expected output: [1, 1, 2, 3, 5, 8]

        const exampleTwo = 10
//      Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

        expect(fibSeq(example)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibSeq(exampleTwo)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// b) Create the function that makes the test pass.
const fibSeq = (num) => {
    let fibArr = [1,1]
    for(var i=1; i < num -1; i++){
        fibArr.push(fibArr[i] + fibArr[i-1])

    }
    return fibArr
}



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
/** Pseudo
 * Create a function naming it onlyOdds
 * The parameter to be passed in is an array so we can use arr as our placeholder
 * We create a variable and use the higher order function .filter
 * We use  .filter to  filter out any element whose value is divisible by 2 and whose type is not a number
 * The modulo operator and typeof can be used for this comparison.
 * Our return statement will utilize the .sort method on our oddNumbers array to sort from least to greatest
 * This works by comparing 2 values of the oddsNumber array at a time. A negative result will sort i before j and vice versa.
 */

// a) Create a test with expect statements for each of the variables provided.
describe("onlyOdds", () => {

    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {

        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
//      Expected output: [-9, 7, 9, 199]

        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
//      Expected output: [-823, 7, 23]

        expect(onlyOdds(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOdds(fullArr2)).toEqual([-823, 7, 23])
    })
})

// b) Create the function that makes the test pass.
const onlyOdds = (arr) => {
    let oddNumbers = arr.filter(n => {
        return n % 2 !== 0 && typeof n === "number"
    })
    return oddNumbers.sort((i,j) => i - j)
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

/** Pseudo
 * Create a function naming it sumOfArray
 * The parameter to be passed in is an array so we can use arr as our placeholder
 * We create a variable and set it to 0 as our starting point. This is because the accumulatting sum of the first
   element will remain the same because it is not added with anything... + 0
 * We  use .map to iterate over the passed in array and return an array of the same length
 * Our return will be the starting value of that iteration added with the next element of the passed in array.
 */

// a) Create a test with expect statements for each of the variables provided.
describe("sumOfArray", () => {
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
//      Excpected output: [2, 6, 51, 60]
        const numbersToAdd2 = [0, 7, -8, 12]
//      Expected output: [0, 7, -1, 11]
        const numbersToAdd3 = []
//      Expected output: []
        expect(sumOfArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(sumOfArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(sumOfArray(numbersToAdd3)).toEqual([])
    })
})

// b) Create the function that makes the test pass.

const sumOfArray = (arr) => {
    let arrAccumulate = 0
    return arr.map(n => {
        return arrAccumulate += n
    })
}