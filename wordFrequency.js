const wordFrequency = (sentence) => {
    let frequency={}
    const words = sentence.split(' ')
    // console.log(words)
    for(const word of words){
        console.log(word)
        if(word in frequency){
            frequency[word] += 1
        }
        else
        frequency[word] = 1
    }
    return frequency
}
console.log(wordFrequency('lol what lol'))