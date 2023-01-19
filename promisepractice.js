// Asynchronous Programming

// You order soup
// Meanwhile you continue your covo with a friend
// RESOLVED - Your server brings you soup
// REJECTED - No soup today

// RESOLVED - if waiter brings you soup 
// tip the waiter and pay for the soup

// REJECTED - leave a bad review, no soup

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        const isReady = [true,false][Math.floor(Math.random()*2)]
        isReady ? resolve('soup is ready') : reject('no soup today')
    },2000)
})

// console.log(promise1
//     .then(success => console.log(success))
//     .catch(error => console.log(error))
//     )

const getSoup = async() => {
    const data = {rating:null, review:null, tip: null, pay: null}
    try{
        const response = await promise1
        console.log(response)
        data.rating = 5
        data.review = 5
        data.tip = .2
        data.pay = 10
        return data
    } catch(err) {
        console.log(err)
        data.pay = 0
        data.rating=1
        data.review = 1
        data.tip = 0
        return data
    }
}

console.log(getSoup().then(value => console.log(value)))