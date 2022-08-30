console.log("hello");
let title = document.getElementById("title");

console.log("before:", title.innerText);

let message = "Goodbye";

title.innerText = message;

console.log("after: ", title.innerText);

title.innerHTML = `<p>${message}</p>`;

title.style.color = "red";

let redDiv = document.getElementById("red");
let yellowDiv = document.getElementById("yellow");
let greenDiv = document.getElementById("green");

// redDiv.onclick = () => console.log("red");
// yellowDiv.onclick = () => console.log("yellow");
// greenDiv.onclick = () => console.log("green");

const squares = document.querySelectorAll(".colorButton");

// console.log(squares[0].value)

// squares.forEach(square => console.log(square.value))

//forEach
squares.forEach((square) => {
  square.onclick = () => console.log(square.value);
});

const timesClicked = { red: 0, yellow: 0, green: 0 };
squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
  };
});

function clearScores() {
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  timesClicked.green = 0;
  squares.forEach(square => {
    square.innerText = 0
  })
}

const clearDiv = document.getElementById("clearButton")
clearDiv.onClick = () => clearScores()