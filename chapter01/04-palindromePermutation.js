function palindromePermutation(palindrome) {
  var reference = "Tact Coa";
  var referenceSorted = reference
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  var palindromeLower = palindrome.replace(/\s/g, "").toLowerCase();
  var palindromeSorted = palindrome
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  var palindromeReversed = palindrome
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  return (
    referenceSorted === palindromeSorted &&
    palindromeLower === palindromeReversed
  );
}

console.log(palindromePermutation("taco cat"), "true");
console.log(palindromePermutation("atco cta"), "true");
console.log(palindromePermutation("Tact boa"), "false");
