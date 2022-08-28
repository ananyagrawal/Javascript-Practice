const findMax = (array) => {
    let max=array[0];
    for(const num of array){
        if(num>max)
        max=num;
    }
    return max;
}
console.log(findMax([1, 3, 5, 4, 2, 7, 2]))