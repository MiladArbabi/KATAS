function findShort(s) {
    const smallestString = s.split(' ').sort((a, b) => a.length - b.length).find((x) => x.charAt(0));
    return smallestString.length;
}

console.log(findShort("bitcoin takedasd overas worldss maybes"));
console.log(findShort("bitcoin takeasd sdover the world mayb"));
console.log(findShort("bitcoin takeran isshsde over thefefe world "));
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
