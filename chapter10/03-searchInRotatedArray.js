function searchInRotatedArray(array, searched) {
  return array.indexOf(searched);
}

console.log(searchInRotatedArray([1, 2, 3, 4], 3));
console.log(searchInRotatedArray([3, 4, 1, 2], 1));
console.log(searchInRotatedArray([3, 4, 1, 2], 4));
