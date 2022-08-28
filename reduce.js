// reduce
// takes in a function as an argument
// reduce loops and gives you back the accumulator
const nums = [1, 2, 3, 4]
const result = nums.reduce((prev, current) => prev+current)
console.log(result)

const actors = [
    {name: 'Johnny', netWorth: 2000000},
    {name: 'Amber', netWorth: 10},
    {name: 'Leonardo', netWorth: 10000000},
]
const sumNetWorth = actors.reduce((prev, curr)=> prev+curr.netWorth, 0)
console.log(sumNetWorth)