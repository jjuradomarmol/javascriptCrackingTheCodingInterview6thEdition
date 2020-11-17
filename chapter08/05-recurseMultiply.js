function recurseMultiply (a, b) {
  if (a < 0 || b < 0) {
    throw "error: a and b should only be positive integers";
  }
  
  if (b === 0) {
    return 0;
  } else if (b === 1) {
    return a;
  } else {
    return a + recurseMultiply(a, b - 1);
  }
};

// Proofs

console.log(recurseMultiply(2, 3));
