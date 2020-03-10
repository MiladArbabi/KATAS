function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
  }
  
console.log(maskify('2, 4, 20, 4, -1, -2, 5'));
console.log(maskify('1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5'));
console.log(maskify('20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5'));
console.log(maskify('10'));
console.log(maskify('531, 1532535, 351, 1325, 1, 5321, 10, 531, 153, 531, 153'));
console.log(maskify('5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10'));
