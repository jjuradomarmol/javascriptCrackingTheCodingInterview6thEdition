function replaceUrlSpaces(str){
  
  const convertToArray = str.trim().replace(/\s/g, '%20');
  return convertToArray
  
}

console.log(replaceUrlSpaces("Sai Charan P"));
