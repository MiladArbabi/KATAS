function maxMultiple(divisor, bound){
    return Math.floor(bound / divisor) * divisor;
  }

  console.log(maxMultiple(2,7));
  console.log(maxMultiple(3,10));
  console.log(maxMultiple(7,17));
  console.log(maxMultiple(10,50));
  console.log(maxMultiple(37,200));
  console.log(maxMultiple(7,100));