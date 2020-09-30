function everyCharUnique(theString) {
  let hasDuplicates = /([a-zA-Z]).*?\1/.test(theString);
  return !(hasDuplicates);
}

console.log(everyCharUnique("abcd"), "true");
console.log(everyCharUnique("mdjq"), "true");
console.log(everyCharUnique("abccd"), "false");
