let numbers = [1, 2, 3, 4, 5]
const sum = (num) =>{
    let a=0
    for(const n of num){
        a=a+n
    }
    return a
}
let n=sum(numbers)
console.log(n)

