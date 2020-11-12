function flipBitToWin(number) {
  let binaryString = number.toString(2);
  let arrayOnes = binaryString.split("0");
  let longest = 0;
  for (let i = 0; i < arrayOnes.length - 1; i++) {
    if (arrayOnes[i].length + arrayOnes[i + 1].length > longest) {
      longest = arrayOnes[i].length + arrayOnes[i + 1].length + 1;
    }
  }
  return longest;
}

// Proofs

console.log(flipBitToWin(1775), 8);
