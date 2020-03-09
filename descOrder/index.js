function descendingOrder(n){
    const result = n.toString().split('').sort((a, b) => a - b).reverse().join('');
    return parseInt(result);
}

console.log(descendingOrder(35097531));
console.log(descendingOrder(213538));
console.log(descendingOrder(254327563));
console.log(descendingOrder(542218746));
