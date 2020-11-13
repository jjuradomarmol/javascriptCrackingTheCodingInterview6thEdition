function pairwiseSwap(number) {
  let binaryNumber = number.toString(2).split("");
  for (let i = 0; i <= binaryNumber.length - 2; i += 2) {
    [binaryNumber[i], binaryNumber[i + 1]] = [
      binaryNumber[i + 1],
      binaryNumber[i],
    ];
  }
  return binaryNumber;
}

// Proofs

console.log(pairwiseSwap(10));
