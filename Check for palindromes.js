/*
 * Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

 * Note
 * You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols).
 * And turn everything lower case in order to check for palindromes.

 * We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

 * We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
 */


function palindrome(str) {
  // Good luck!
  
 var str2 = str.replace(/[^A-Za-z0-9]/gi, '');
 var str3 = str2.toLowerCase();
  
  if (str3 === null)
    return true;
  
  var array = [];
  
  for(var i = 0; i < str3.length; i++) 
    array.push(str3[i]);
  
  array.reverse();
  var strrev = array.join("");
  
  if(strrev === str3)
     return true;
  else 
    return false;
}



palindrome("1 eye for of 1 eye.");
