function parens(n) {
  let answers = [];
  
  function recurse(currentParens, remainingPairs) {
    if (remainingPairs === 0) {
      answers.push(currentParens);
    } else {
      let used = {};
      if (!used[`(${currentParens})`]) {
        used[`(${currentParens})`] = true;
        recurse(`(${currentParens})`, remainingPairs - 1);
      }
      if (!used[`()${currentParens}`]) {
        used[`()${currentParens}`] = true;
        recurse(`()${currentParens}`, remainingPairs - 1);
      }
      if (!used[`${currentParens}()`]) {
        used[`${currentParens}()`] = true;
        recurse(`${currentParens}()`, remainingPairs - 1);
      }
    }
  }
  
  recurse("", n);
  
  return answers;
}

// Proofs

var testNumber = 3;
console.log(parens(testNumber));
