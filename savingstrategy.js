const savingStrategy = (income) => {
    const budget = {
        needs: income*0.5,
        wants: income*0.3,
        savings: income*0.2
    }
    return budget
}
console.log(savingStrategy(10000))