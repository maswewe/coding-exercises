/* ---------
 * Challenge
 * ---------

 	Given an array of integers of any length, return an array that has 1 added to the value 
 	represented by the array.

	For example an array [2, 3, 9] equals 239, add one would return an array [2, 4, 0].

	[4, 3, 2, 5] would return [4, 3, 2, 6]

	The array can't be empty and only positive, single digit integers are allowed. 
	The function should return null if the array is empty or any of the array values are 
	negative or more than 10.

	[1, -9] would return null/nil/None (according to the language implemented).
*/

function upArray(arr){

  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      return null; 
    }
  }
  
  var strings = "";
  arr.map(function(item) {
    strings += item;
  });
  
  var newValue = (parseInt(strings) + 1).toString(); 
  var output = [];
  
  for(var i = 0; i < newValue.length; i++) {
    output.push(parseInt(newValue.charAt(i))); 
  }
  
  return output; 
  
}