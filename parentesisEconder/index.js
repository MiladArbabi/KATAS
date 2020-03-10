function duplicateEncode(string){
    return ([...string]).map((x) => x.match(/([^])\1+/gi) ? ')' : '(').join('');
    // text.toLowerCase().split('').sort().join('').match(/([^])\1+/gi) || []).length;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("Success"))
console.log(duplicateEncode("(( @"));