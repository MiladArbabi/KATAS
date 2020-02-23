function menFromBoys(arr) {
    const odds = [];
    const evens = [];
    const array = []
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.unshift(arr[i]);
    } else {
        evens.unshift(arr[i]);;
    }
  }
  return array.concat(...new Set(evens)).concat(...new Set(odds));
}

console.log(menFromBoys([-7, -3, -3, -14, -16, 7, 3, 14, 16, 160, 160, 17]));
console.log(menFromBoys([7, -3, 134, -17, -178]));
console.log(menFromBoys([-94, 99, -100, -99, -96, -99]));
console.log(menFromBoys([20, 33, 50, 34, 43, 46, -33, -50, -34]));
