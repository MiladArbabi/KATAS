function squareDigits(num){
    return ("" + num).split('').map((el) => Math.pow(el, 2)).join('');
}

console.log(squareDigits(9119));
// 811181
