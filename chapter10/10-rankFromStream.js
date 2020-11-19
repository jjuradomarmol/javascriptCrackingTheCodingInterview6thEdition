function getRankOfNumber(value) {
  let setArray = Array.from(mySet).sort();
  return setArray.indexOf(value);
}

// Proofs

let mySet = new Set();
mySet.add(5);
mySet.add(1);
mySet.add(4);
mySet.add(4);
mySet.add(5);
mySet.add(9);
mySet.add(3);

console.log(getRankOfNumber(1));
console.log(getRankOfNumber(3));
console.log(getRankOfNumber(5));
