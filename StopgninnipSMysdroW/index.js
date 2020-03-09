function spinWords(string){
    return string.split(' ').map((x) => x.length >= 5 ? x.split('').reverse().join('') : x ).join(' ')
}

console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
console.log(spinWords("You are almost to the last test"));
console.log(spinWords("Just kidding there is still one more"));
console.log(spinWords("Seriously this is the last one"));