function sortedSearchNoSize(array = [], searched = 0) {
  let indexesArray = [],
    index = undefined;

  while (array.indexOf(searched) >= 0) {
    index == undefined
      ? (index = array.indexOf(searched))
      : (index += array.indexOf(searched) + 1);
    indexesArray.push(index);
    array = array.slice(array.indexOf(searched) + 1);
  }

  return indexesArray;
}

let listy = [2, 3, 4, 2, 6, 3, 2];
console.log(sortedSearchNoSize(listy, 3));
console.log(sortedSearchNoSize(listy, 2));
console.log(sortedSearchNoSize(listy, 6));
console.log(sortedSearchNoSize(listy, 10));
