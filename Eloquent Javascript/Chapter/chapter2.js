/**Loop that makes seven calls to console.log to output a triangle of #s*/

// Check javascript console for output. Add # to an array, print them all to one line, empty the array, increment with for loop and repeat until 7 is reached.

let arr = [];
for(let i = 0; i < 7; i++){
    for(let j = 0; j <= i; j++){
        arr.push("#");
    }
    console.log(arr);
    arr = [];
}

/**FizzBuzz 
 * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
 */

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0 && i % 5 !== 0){
        console.log("Fizz");
    }else if( i % 5 === 0 && i % 3 !== 0){
        console.log("Buzz");
    }else{
        console.log(i);
        //console.log(String(i));
    }
}

/**
 * Chessboard String
 * 
 * Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

 */

 let chessboard = "";
 const BOARDSIZE = 8;

 for(let i = 1; i <= BOARDSIZE; i++){
     for(let j = 1; j <= BOARDSIZE; j++){
        if(i % 2 !== 0){
            //start with space then print hash
            /*if(chessboard === ""){
                chessboard = chessboard + " ";
            }else */if(chessboard.length % 2 !== 0){
                chessboard = chessboard + "#";
            }else{
                chessboard = chessboard + " ";
            }
        }else{
            //else start with hash then print space
            /*if(chessboard === ""){
                chessboard = chessboard + "#";
             }else */if(chessboard.length % 2 === 0){
                 chessboard = chessboard + " ";
             }else{
                 chessboard = chessboard + "#";
             }
        }
        
     }
     chessboard = chessboard + "\n";
 }
 console.log(chessboard);

 //Off by 1 error prints extra blankspace first line, mostly complete