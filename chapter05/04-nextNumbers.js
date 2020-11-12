function nextNumbers(number) {
  let binaryNumber = number.toString(2);

  let longestBinaryNumber = number << 1;

  let smallestBinaryNumber = "-the number can't be minimized-";
  let arrayOnes = binaryNumber.split("0");
  smallestBinaryNumber = parseInt(arrayOnes);
  if (arrayOnes.length > 2) {
    let removeFirstZero = arrayOnes[0] + arrayOnes[1];
    let restOfArray = arrayOnes.slice(2).join("0");
    arrayOnes = removeFirstZero + "0" + restOfArray;
    smallestBinaryNumber = parseInt(arrayOnes, 2);
  }

  return `The longest is ${longestBinaryNumber} and the smallest is ${smallestBinaryNumber}`;
}

// Proofs

console.log(nextNumbers(9));
