function checkPermute (stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    return false;
  } else {
    var stringOneSorted = stringOne.split('').sort().join('');
    var stringTwoSorted = stringTwo.split('').sort().join('');
    return stringOneSorted === stringTwoSorted;
  }
};

// Tests
console.log(checkPermute('aba', 'aab'), true);
console.log(checkPermute('aba', 'baa'), true);
console.log(checkPermute('aba', 'aa'), false);
