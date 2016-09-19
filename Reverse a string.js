/**
 * Reverse the provided string. You may need to turn the string into an array before you can reverse it.
 * Your result must be a string.
 */

function reverseString(str) {
  
  var array = [];
  for(var i = 0; i < str.length; i++)
      array.push(str[i]);
      
  array.reverse();
  var reversedString = array.join("");
    
  return reversedString;
}

reverseString("hello");
