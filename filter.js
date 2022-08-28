// loops and returns an array with matching conditions
// filter([1, 2, 3, 4, 5, 6], 3) => [4, 5, 6]
const filter = (numbers, greaterThan) => {
    let result=[]
    for(const number of numbers){
        if(number>greaterThan){
            result.push(number)
        }
    }
    return result
}
const nums = [1, 2, 3, 4, 5, 6]
filter(nums,2)
console.log(nums.filter(num => num > 3 || num < 2))

const actors = [
    {name: 'Johnny', netWorth: 2000000},
    {name: 'Amber', netWorth: 10},
    {name: 'Leonardo', netWorth: 10000000},
]
console.log(actors.filter(actor => actor.netWorth > 10))