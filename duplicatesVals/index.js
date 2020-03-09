function duplicateCount(text){
    const repeatedWords = (text.toLowerCase().split('').sort().join('').match(/([^])\1+/gi) || []).length;
    
    if(repeatedWords === 0) {
        return 0;
    } else if (repeatedWords === 2 ) {
        return 2;
    } else {
        return 1;
    }
}

console.log(duplicateCount('hgftv'));
console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('aabBcd'));
console.log(duplicateCount('TheTeoery'));
console.log(duplicateCount('AdamBeDouche'));