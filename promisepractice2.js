
// Rules for using async/await
// 1. You must create a function
// 2. You must use the keyword async
// 3. Use the word await

const func = async() => {
    const response = await fetch('https://dog.ceo/api/breed/hound/list');
    const data = await response.json();
    console.log(data.message.hound)
}


func();

fetch('https://dog.ceo/api/breed/hound/list')
    .then((response) => response.json())
    .then((data) => console.log(data))