// higher order functions
// map- loops and returns an array
let result = [1, 2, 3, 4].map(number => number * 2)
console.log(result)

const divide = (numbers) => {
    return numbers.map(number => number/2)
}
console.log(divide([4, 6, 8, 20]))