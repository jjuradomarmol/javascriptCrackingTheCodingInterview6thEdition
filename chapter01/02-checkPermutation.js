function checkPermute(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    return false;
  } else {
    let stringOneSorted = stringOne
      .split("")
      .sort()
      .join("");
    let stringTwoSorted = stringTwo
      .split("")
      .sort()
      .join("");
    return stringOneSorted === stringTwoSorted;
  }
}

console.log(checkPermute("aba", "aab"), true);
console.log(checkPermute("aba", "baa"), true);
console.log(checkPermute("aba", "aa"), false);
