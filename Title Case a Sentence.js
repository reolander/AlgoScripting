/**
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 * For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 **/

function titleCase(str) {
  
  var string = str.toLowerCase();
  var array = string.split(" ");
  var arr = [];
   
  for (var i = 0; i < array.length; i++) 
      arr.push(array[i].split(''));
   
  for(var j = 0; j < arr.length; j++)
  {
      arr[j][0] = arr[j][0].charCodeAt();
      arr[j][0] -= 32; 
      arr[j][0] = String.fromCharCode(arr[j][0]);
  }
  
   for(var k = 0; k < arr.length; k++)
      arr[k] = arr[k].join('');
    
   string = arr.join(" ");
  
   return string;
}

titleCase("I'm a little tea pot");
