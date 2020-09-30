function palindromePermutation(palindrome) {
  const reference = "Tact Coa";
  let referenceSorted = reference
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let palindromeLower = palindrome.replace(/\s/g, "").toLowerCase();
  let palindromeSorted = palindrome
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let palindromeReversed = palindrome
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
