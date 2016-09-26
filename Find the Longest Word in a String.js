/**
  * Return the length of the longest word in the provided sentence.
  * Your response should be a number.
  */

function findLongestWord(str) {
  
  var array = str.split(" ");
  var longestNumber = 0;
  
 for (var i = 0; i < array.length; i++)
 {  
    if(array[i].length > longestNumber)
     longestNumber = array[i].length; 
 }
  
  return longestNumber;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
