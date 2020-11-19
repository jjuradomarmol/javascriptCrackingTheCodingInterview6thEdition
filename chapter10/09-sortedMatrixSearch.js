function sortedMatrixSearch(array, searched) {
  // It's in linear search to avoid errors with the recursion
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      if (array[i][j] === searched) {
        return `Value found in matrix[${i}][${j}]!`;
      }
    }
  }

  return "The value is not in the matrix";
}

// Proofs

console.log(
  sortedMatrixSearch(
    [
      [1, 2],
      [3, 4],
    ],
    3
  )
);

console.log(
  sortedMatrixSearch(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    9
  )
);

console.log(
  sortedMatrixSearch(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  )
);

console.log(
  sortedMatrixSearch(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    100
  )
);
