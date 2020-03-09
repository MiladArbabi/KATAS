function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}



console.log(getMiddle("test"));
console.log(getMiddle("Tavanabo"));
console.log(getMiddle("middle"));

console.log(getMiddle("tarab"));
console.log(getMiddle("testing"));
console.log(getMiddle("Abf"));


console.log(getMiddle("hasrat"));
