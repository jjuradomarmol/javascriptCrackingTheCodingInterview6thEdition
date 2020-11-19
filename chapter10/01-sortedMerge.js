function sortedMerge(array1, array2) {
  let sortedMergedArray = array1.concat(array2).sort((a, b) => a - b);
  return sortedMergedArray;
}

console.log(sortedMerge([0, 2, 4], [1, 3, 5]));
console.log(sortedMerge([0, 1, 2], []));
