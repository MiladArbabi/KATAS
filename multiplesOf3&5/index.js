function solution(number) {
  let result = 0;
  for (let i = 0; i < number; i++) {
    if(i % 3 === 0|| i % 5 === 0) {
      result += i;
    }
  }
  return result;
}

console.log(solution(2));
console.log(solution(10));
console.log(solution(1200));
console.log(solution(3062));
