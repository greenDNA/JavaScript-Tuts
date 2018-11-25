/**
 * Create a range array
 * 
 * The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

 */

 function arrayRange(start, end, step = 1){
     //include support for negative integers
     let arr = [];
     for(let i = start; i <= end; i+=step){
         arr.push(i);
     }
     return arr;
 }

 function sumArray(numArray){
     let sum = 0;
     for(let i = 0; i < numArray.length; i++){
         sum += numArray[i];
     }
     return sum;
 }

 console.log(sumArray(arrayRange(1, 10)));

 /**
  * Reversing arrays
  * 
  * Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
  */

  function reverseArray(arr){
      newArr = [];
      while(arr.length > 0){
          newArr.push(arr.pop());
      }
      return newArr;
  }

  function reverseArrayInPlace(arr){
    //not sure what this is asking  
    return arr;
  }

  console.log(reverseArray(['1', '2', 'ono']));

  /**
   * Comparisons
   * 
   * Deep comparison
The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.
   */

   function deepEqual(val1, val2){
       if(val1 === val2){
           return true;
       }
       //Using hasOwnProperty() will help in writing solution return 
   }

//To be continued