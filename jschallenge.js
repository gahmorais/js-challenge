function charAtPosition(a, n) {
    return a.charAt(n - 1);
    // return a[n - 1]
  }
  
  function objectHasKey(a, b) {
    return a.hasOwnProperty(b);
    // return b in a
  }
  
  function createObject(a) {
    return { key: a };
  }
  
  function lastThreeChar(a) {
    const lastChar = a.length;
    const lastMinusThreeChar = a.length - 3;
    return a.slice(lastMinusThreeChar, lastChar);
    // return str.slice(-3)
  }
  
  function strictEQuals(a, b) {
    return a === b;
  }
  
  function arrayLength(a) {
    return a.length;
  }
  
  function halfExtract(a) {
    const half = parseInt(a.length / 2);
    return a.slice(0, half);
  }
  
  function extractThreeElementsArray(a) {
    return a.slice(0, 3);
  }
  
  // Write a function that takes an object with two properties and a string as arguments
  // It should return the value of the property with key equal to the value of the string
  function returnProperty(obj, key) {
    return obj[key];
  }
  
  // Write a function that takes an object with two properties as argument
  // It should return the value of the property with key country
  
  function returnCountry(obj) {
    //return obj.country
    return obj["country"];
  }
  
  // Write a function that takes a string (a) as argument
  // Remove the last 3 characters of a
  // Return the result
  
  function removeThreeLastChar(a) {
    const size = a.length;
    //return a.slice(0,-3)
    return a.slice(0, size - 3);
  }
  
  // Write a function that takes a string (a) as argument
  // Get the first 3 characters of a
  // Return the result
  
  function maintainThreeChar(a) {
    return a.slice(0, 3);
  }
  
  // Write a function that takes an array of numbers as argument
  // Return the number of negative values in the array
  function negativeNumbers(a) {
    return a.filter((x) => x < 0).length;
  }
  
  // Write a function that takes a string (a) as argument
  // Remove the first 3 characters of a
  // Return the result
  function removeThreChars(a) {
    return a.slice(3);
  }
  
  // Write a function that takes a Set and a value as arguments
  // Check if the value is present in the Set
  
  function checkSet(set, val) {
    return set.has(val);
  }
  
  // Write a function that takes two numbers (a and b) as arguments
  // If a is smaller than b, divide a by b
  // Otherwise, multiply both numbers
  // Return the resulting value
  
  function sumOrMultiply(a, b) {
    //return a < b ? a / b : a * b
    if (a < b) {
      return a / b;
    }
    return a * b;
  }
  
  // Write a function that takes an array of strings as argument
  // Sort the array elements alphabetically
  // Return the result
  
  function alphabeticalOrder(a) {
    // return a.sort()
    return a.sort((a, b) => a.localeCompare(b));
  }
  
  // Write a function that takes two date instances (a and b) as arguments
  // It should return true if a is earlier than b
  // It should return false otherwise
  
  function compareDates(dateOne, dateTwo){
      //return a < b
      return dateOne.getTime() < dateTwo.getTime()
  }
  
  // Write a function that takes an object (a) as argument
  // Return an array with all object keys
  
  function returnObjKeys(a){
      return Object.keys(a)
  }
  
  // Write a function that takes an array (a) as argument
  // Extract the last 3 elements of a
  // Return the resulting array
  
  function removeThreeLastEl(arr){
      return arr.slice(-3)
  }
  
  // Write a function that takes two numbers (a and b) as argument
  // Return b percent of a
  
  function calcPercentage(a,b){
      return a * (b/100)
  }
  
  // Write a function that takes two arrays (a and b) as arguments
  // Create an object that has properties with keys 'a' and corresponding values 'b'
  // Return the object
  
  console.log(calcPercentage(500,25));
  