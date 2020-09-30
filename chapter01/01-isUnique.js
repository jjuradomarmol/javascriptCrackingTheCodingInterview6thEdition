function everyCharUnique(theString) {
  return !(hasDuplicates = /([a-zA-Z]).*?\1/.test(theString));
}

console.log(everyCharUnique("abcd"), "true");
console.log(everyCharUnique("mdjq"), "true");
console.log(everyCharUnique("abccd"), "false");

