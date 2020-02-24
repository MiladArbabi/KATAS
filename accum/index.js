function accum(s) {
    console.log('([...s]):', ([...s]))
    return ([...s]).map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i)));
}

// function accum(s) {
//     return s.split('')
//     .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
//     .join('-');
//   }
console.log(accum("Zp"));
console.log(accum("Nyff"));
console.log(accum("MjtkuB"));
console.log(accum("EvidjUno"));
console.log(accum("HbideVbxncC"));