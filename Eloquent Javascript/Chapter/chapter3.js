/**
 * Make a minimum
 * 
 * Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.
 */

 function min(num1, num2){
     if(num1 <= num2){
         return num1;
     }else if(num2 < num1){
         return num2;
     }
 }

 console.log(min(4, 22));

 /**
  * Recursive isEven
  * 
  * Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
  */

  function isEven(nonnegInteger){
      if(nonnegInteger === 0){
          return true;
      }else if(nonnegInteger === 1){
          return false;
      } 
      if(nonnegInteger > 0){
          return isEven(nonnegInteger - 2);
      }else{
          return isEven(nonnegInteger + 2);
      }
  }

  console.log(isEven(14));
  console.log(isEven(27));
  console.log(isEven(-306));

  /**
   * Bean Count
   * 
   * Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
   */

   /*function countBs(arg){
       let count = 0;
       for(let i = 0; i < arg.length; i++){
           if(arg[i] === "B"){
               count++;
           }
       }
       return count;
   }*/

   function countChar(arg, char){
    let count = 0;
    for(let i = 0; i < arg.length; i++){
        if(arg[i] === char){
            count++;
        }
    }
    return count;
    }

   //console.log(countBs("BBbBBbBB", "b"));
   console.log(countChar("BBbBBbBB", "b"));