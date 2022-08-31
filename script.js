function fibonacci(num){
    let result = [0, 1]

    for(let index = 1; index < num; index++){
        let newFibonacci = result[index] + result[index-1]
        result.push(newFibonacci)
    }
    return result[result.length-1]

}
console.log(fibonacci(7))
