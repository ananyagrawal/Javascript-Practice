// OBJECTS {}
// key:value pairs
const person = {
    name: 'Leonardo', 
    shirt: 'white'
}

// access object: dot notation vs. bracket notation
console.log(person.name)
console.log(person.shirt)

// bracket notation
console.log(person['name'])

person.phone='123456789'
console.log(person.phone)

console.log(person)

// Person 2
const person2={
    name: 'Anany',
    shirt: 'black'
}
console.log(person2)


// es6 arrow function (2 arguments)
// object
// template literals
// methods 
const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: 100000,
        liabilities: 50000,
        netWorth: function(){
            return this.assets - this.liabilities
        }
    }
    const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $${person.netWorth()}`

    return intro
}

console.log(introducer('Anany','black'))