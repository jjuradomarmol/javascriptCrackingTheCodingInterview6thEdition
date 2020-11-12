function mysteriousFunction(number) {
  return `The numbers ${number} and ${
    number - 1
  } in base 2 have some 1 in common? ${!((number & (number - 1)) === 0)}`;
}

// Proofs

console.log(mysteriousFunction(3), "true");
console.log(mysteriousFunction(4), "false");
