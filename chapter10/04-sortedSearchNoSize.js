function sortedSearchNoSize(array, searched) {
  return array.indexOf(searched);
}

listy = [2, 3, 4, 6, 3];
console.log(sortedSearchNoSize(listy, 3) === 1);
console.log(sortedSearchNoSize(listy, 2) === 0);
console.log(sortedSearchNoSize(listy, 6) === 3);
console.log(sortedSearchNoSize(listy, 1) === -1);
console.log(sortedSearchNoSize(listy, 10) === -1);
console.log(sortedSearchNoSize(listy, 5) === -1);
