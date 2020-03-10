function findEvenIndex(arr) {
    let temp = 0;
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] < arr[j])
            temp = j;
        }
    }
    return temp;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]))
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));