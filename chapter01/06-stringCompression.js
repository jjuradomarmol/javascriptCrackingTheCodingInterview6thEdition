function stringCompression(theString) {
  if (!(hasDuplicates = /([a-zA-Z]).*?\1/.test(theString))) return theString;

  let theStringCompressed = [...theString].reduce((a, e) => {
    a[e] = a[e] ? a[e] + 1 : 1;
    return a;
  }, {});
  let theStringCompressedStringify = JSON.stringify(
    theStringCompressed
  ).replace(/([^\w]*)/g, "");
  return theStringCompressedStringify;
}

console.log(stringCompression("aabcccccaaa"), "a5blc5");
console.log(stringCompression("abc"), "abc")
