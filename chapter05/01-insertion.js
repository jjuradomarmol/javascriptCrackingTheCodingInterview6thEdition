function insertion(binaryNumber1, binaryNumber2, position1, position2) {
  binaryNumber1 = binaryNumber1.split("");
  binaryNumber2 = binaryNumber2.split("");
  let binaryNumber1Length = binaryNumber1.length - 1;
  let binaryNumber2Length = binaryNumber2.length - 1;
  for (let a = 0; a < position2 - position1 + 1; a++) {
    binaryNumber1[binaryNumber1Length - (position1 + a)] =
      binaryNumber2[binaryNumber2Length - a];
  }
  return (binaryNumberInserted = binaryNumber1.join(""));
}

// Proofs

console.log(insertion("10000000000", "10011", 2, 6), "10001001100");
