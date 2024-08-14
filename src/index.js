module.exports = function reverse (n) {
    let result = '';
    let numToString = n.toString();
  if (n >= 0) {
   for (let i = 0; i < numToString.length; i++) {
    result = `${numToString[i]}${result}`;
  }
    return +result;
  } else if (n < 0) {
    for (let i = 1; i < numToString.length; i++) {
    result = `${numToString[i]}${result}`;
  }
    return (+result * -1);
 }
   
}


