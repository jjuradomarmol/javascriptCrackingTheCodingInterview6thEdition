function replaceUrlSpaces(theString) {
  const convertToArray = theString.trim().replace(/\s/g, "%20");
  return convertToArray;
}

console.log(replaceUrlSpaces("     Mr John Smith   "));
console.log(replaceUrlSpaces("Sai Charan P"));
