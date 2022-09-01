const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople= Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
    // get bill from user input & convert it into a number
    const bill = Number(billInput.value)

    // get the tip from user & convert it into a percentage 
    const tipPercentage = Number(tipInput.value)/100

    // get the total tip amount
    const tipAmount = bill * tipPercentage
    
    // calculate the total amount
    const total = tipAmount + bill

    // calculate the per person total 
    const perPersonTotal = total/numberOfPeople

    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
    // increament the number of people
    numberOfPeople += 1
    
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the bill based on the new number of people
    calculateBill()
}

const decreasePeople = () => {
    // decreament the number of people
    if(numberOfPeople <= 1){
        throw 'You cannot have less than 1 perosn'
    }
    numberOfPeople -= 1

    // update the DOM with the new number of people 
    numberOfPeopleDiv.innerText = numberOfPeople
    
    // calculate the bill based on the new number of people
    calculateBill()
}