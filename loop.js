const fruits= ['banana', 'mango', 'apple', 'pear','watermelon']

// for(let i=0; i< fruits.length; i++){
//     console.log(fruits[i])
// }

for(const fruit of fruits){
    console.log(fruit)
}

const numbers = [1, 2, 3, 4, 5, 6]
let n=0;
for (const number of numbers){
    n=number+number;
}
console.log(n)

let result = []

for(const number of numbers){
    result.push(number * 2)
}
for(const number of result){
    console.log(number)
}

