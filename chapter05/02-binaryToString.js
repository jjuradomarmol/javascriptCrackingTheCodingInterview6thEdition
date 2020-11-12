function binaryToString(decimalNumber) {
  binaryNumber = decimalNumber.toString(2);
  if (binaryNumber.length > 32) return "ERROR";
  return binaryNumber;
}

console.log(binaryToString(0.625), "0.101");
console.log(binaryToString(0.6255342856783467856932), "ERROR");
