function pendulum(values) {
    let arr = [];
    values.sort((a, b) => a - b).forEach((el, i) => {
        if(i % 2 === 0) {
            arr.unshift(el)
        } else {
            arr.push(el)
        }
    });
    return arr;
}

console.log(pendulum([1, 1, 2, -2, 5]));
console.log(pendulum([1, 2, -20]));
console.log(pendulum([1, -8, 2, -12, -15]));
console.log(pendulum([-100, 11, -12, -2, 50, 12]));
