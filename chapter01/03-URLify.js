function replaceUrlSpaces(theString) {
  const theStringURLified = theString.trim().replace(/\s/g, "%20");
  return theStringURLified;
}

console.log(replaceUrlSpaces("     Mr John Smith   "));
console.log(replaceUrlSpaces("Sai Charan P"));
