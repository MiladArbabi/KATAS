function highAndLow(numbers) {
  let first = numbers.split(' ').sort((a, b) => a - b).shift();
  let last = numbers.split(' ').sort((a, b) => a - b).pop();
  return [first, last];
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
console.log(highAndLow("4 5 29 54 4 -1000 214 2 -64 1 -3 6 -6"));
console.log(highAndLow("4 5 29 54 4 110 214 542 -64 1 -3 6 -6"));
console.log(highAndLow("4 -5432 239 54 4873 0 -214 542 -64 1 -3 6 -6"));
