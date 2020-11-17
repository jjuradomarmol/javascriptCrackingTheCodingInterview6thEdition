function findMagicIndex(array, start = 0, end = array.length - 1) {

  // In linear runtime to avoid errors
  if (start === end && array[start] !== start) {
    return -1;
  } else if (array[start] === start) {
    return start;
  } else {
    return findMagicIndex(array, start + 1, end);
  }
}

// Proofs

console.log(findMagicIndex([-1, 0, 1, 3, 9, 100]), 3);
console.log(
  findMagicIndex([-1, 0, 1, 2, 3, 5, 100, 200, 300, 400, 500, 600, 700]),
  5
);
console.log(findMagicIndex([5, 5, 5, 5, 5, 5]), 5);
