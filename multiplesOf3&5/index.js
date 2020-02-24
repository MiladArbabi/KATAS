function solution(number) {
  let array = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push(i);
    } else if (i % 3 === 0) {
      array.push(i);
    } else if (i % 5 === 0) {
      array.push(i);
    }
  }
  var sum = array.reduce(function(a,b){return a + b;}, 0);
  return sum;
}

console.log(solution(2));
console.log(solution(10));
console.log(solution(120));
console.log(solution(3062));
