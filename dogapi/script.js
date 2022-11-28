console.log('hello')

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

//fetch the url
//.then - Promises
// asynchonous programming
const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json =>{
        console.log(json.message)
        dogImageDiv.innerHTML = `<img src='${json.message}' height=250 width=250/>`
    })
}

dogButton.onclick = () =>{
    getNewDog()
}