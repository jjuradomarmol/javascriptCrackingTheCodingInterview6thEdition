function permuteWithoutDuplicates(string) {
  let answers = [];

  function recurse(currentPermutation, remainingChars) {
    if (remainingChars.length === 0) {
      answers.push(currentPermutation);
    } else {
      for (let i = 0; i < remainingChars.length; i++) {
        recurse(
          currentPermutation + remainingChars.charAt(i),
          remainingChars.slice(0, i) + remainingChars.slice(i + 1)
        );
      }
    }
  }

  recurse("", string);

  return answers;
}

// Proofs

var testString = "abcd";
console.log(permuteWithoutDuplicates(testString));
