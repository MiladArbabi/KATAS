// function highAndLow(numbers){
//     let resultArray = [];
//     let sortedArray = numbers.match(/(\-*[^\W]+)/gm).sort((a, b) => a - b);
//     resultArray.push(sortedArray[sortedArray.length - 1]);
//     resultArray.push(sortedArray[0]);
//     return resultArray.join(' ');
//   }

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }

  console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
  