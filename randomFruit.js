// return a random fruit
const randomFruit = (fruits) => {
    const randomNumber = Math.floor(Math.random() * fruits.length)
    return fruits[randomNumber]
}

let fruits = ['banana', 'pear', 'apple', 'orange']
console.log(randomFruit(fruits))