function getCount(str) {
  var vowelsCount = 0;
  let arr = str.split('');
  console.log(arr);
    for(let i=0; i < arr.length; i++){
      if(arr[i].match(/[aeiou]/gm)){
        vowelsCount++;
      }
    }
  return vowelsCount;
}

// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
// };

console.log(getCount("abracadab"));
// console.log(getCount("abracadabrauafffggggeeeeeeecad"));
// console.log(getCount("abracadabracadabracadaadsdgsd"));
