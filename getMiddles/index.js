// function getMiddle(s) {
//     let target = '';
//     if(s.length % 2 != 0){
//         let targetIndex = Math.floor(([...s]).length / 2);
//         target += ([...s])[targetIndex];
//     } else if (s.length % 2 === 0){
//         let targetIndex = Math.floor(([...s]).length / 2);
//         target += ([...s])[targetIndex - 1] + ([...s])[targetIndex];
//     }
//     return target;
// }

function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1)
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
console.log(getMiddle("TavanabovadHarKedANAbOVADDD"));
console.log(getMiddle("testingtestingtestingtesting"));
