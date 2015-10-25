//find odd occurring element. Given an integer array, find the one element that occurs odd numbers of times, all the other elements occur even amounts.

//take an array and sort it by number. Then loop through the array and remove any number that is the same as the previous one as well as the number it is ont

var array = [1,4,1,4,5,7,8,7,8,5,9,2,9,2,2];
var array2 = [1,3,4,1,3,4,5,6,5,6,6,6,7,9,7,9,7,9,7,9,10];
var array3 = [1,2,6,7,7,5,5,5,5,6,2,1,1];

//loop through returned array,
function remove(arr){
  var sorted = arr.sort();
  var number = sorted.reduce(function(a, b){
    return b - a;
  });
  return number;
}

console.log(remove(array));
console.log(remove(array2));
console.log(remove(array3));


