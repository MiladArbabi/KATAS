function getCount(str) {
  var vowelsCount = 0;
  let stringArray = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < stringArray.length; j++) {
      if (str[i] === stringArray[j]) {
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}

// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
// };

console.log(getCount("abracadabracadabracad"));
console.log(getCount("abracadabrauafffggggeeeeeeecad"));
console.log(getCount("abracadabracadabracadaadsdgsd"));
