
/**
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 *
 * This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
 * But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
 *
 **/


function confirmEnding(str, target) {
  
  var num1 = target.length; 
  var num2 = str.length;
  
  var string = str.substring(num2 - num1, num2);
  
  if (string === target)
    return true;
  else 
    return false;
  
  
  
}

confirmEnding("Bastian", "n");

 
