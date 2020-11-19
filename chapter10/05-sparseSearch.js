function sparseSearch(array, searched) {
  return array.indexOf(searched);
}

let givenString = ["", "", "ball", "", "", "car"];
console.log(sparseSearch(givenString, "ball"));
console.log(sparseSearch(givenString, "car"));
