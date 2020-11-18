function permuteWithDuplicates(string) {
  let answers = [];

  function recurse(currentPermutation, remainingChars) {
    if (remainingChars.length === 0) {
      answers.push(currentPermutation);
    } else {
      let usedChars = [];
      for (let i = 0; i < remainingChars.length; i++) {
        if (!usedChars[remainingChars.charAt(i)]) {
          usedChars[remainingChars.charAt(i)] = true;
          recurse(
            currentPermutation + remainingChars.charAt(i),
            remainingChars.slice(0, i) + remainingChars.slice(i + 1)
          );
        }
      }
    }
  }

  recurse("", string);

  return answers;
}

// Proofs

var test1 = "aaa";
var test2 = "abc";
var test3 = "aba";

console.log(permuteWithDuplicates(test1));
console.log(permuteWithDuplicates(test2));
console.log(permuteWithDuplicates(test3));
