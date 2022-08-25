const letterCounter = (sentence) => {
    let result=0;
    for(const letter in sentence){
        result=Number(letter)+1
    }
    return {result}
}
const phrase='Hey, do you want to play a game?'
console.log(letterCounter(phrase))
console.log(phrase.length)