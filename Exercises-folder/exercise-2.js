//! Ex2.1 - Sum of lowest numbers 
//* Create a function that returns the sum of the two lowest positive numbers given an array of
//* minimum 4 positive integers. No floats or non-positive integers will be passed. 
//* For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. 
//* [10, 343445353, 3453445, 3453545353453] should return 3453455.

let arr = [434, 4, 89, 21,46, 72, 654];
function check(arr) {
    let newarr = [];
    for (var i = 0; i < arr.length; i++) {
        let c = 0;
        for (let j = 0; j < arr.length ; j++) {
            if (arr[i] < arr[j]) {
                c++;
            }
        }
        if (c == arr.length - 1 || c == arr.length - 2) {
            newarr.push(arr[i]);
        }
        if (newarr.length == 2) {
            return newarr[0] + newarr[1];
        }
    }
}
console.log("--2.1--");
console.log(check(arr));


//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
console.log("--2.2--");
//! Ex2.2 - One and Zero - Binary
//* Given an array of ones and zeroes,
//* convert the equivalent binary value to an integer.
//* Eg: [
    

let binary = [0, 0, 1,0,0,0,0,0,0,0,0,0,0,0,1 ];
let x = binary.join('');
console.log('binary to num', parseInt(x, 2));

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
console.log("--2.3--");
//! Ex2.3 - Find the Next Perfect Square
//* You might know some pretty large perfect squares. 
//* But what about the NEXT one ?
//* Complete the findNextSquare method that finds the next integral perfect square
//* after the one passed as a parameter.
//* Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

function findNextSquare(sq) { 
    if (Number.isInteger(Math.sqrt(sq))) {
        return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1); 
  } 
  else {
      return -1;
  }
}
console.log(findNextSquare());

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
console.log("--2.4--");
//! Ex2.4 - Unique

//* There is an array with some numbers. All numbers are equal except for one. Try to find it!
//* findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//* indUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//* It’s guaranteed that array contains at least 3 numbers.

const findUniq = [2,1,1,1];
let count = 0;
let result = 0;
for (let i = 0; i < findUniq.length; i++) {
    for (let j = 0; j < findUniq.length; j++) {
        if (findUniq[i] !== findUniq[j]) {
            result = findUniq[j];
            findUniq.splice(j, 1);
        }
    }
}
console.log(result);
// console.log(`value i -> ${findUniq[i]}  value j -> ${findUniq[j]} result -> ${result}`);

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
console.log("--2.5--");
//! Ex2.5 - Summation

//* Write a program that finds the summation of every number from 1 to num.
//* always be a positive integer greater than 0.

//? For example: summation(2) -> 3, 1+2 
//? summation(8) -> 36, 1+2+3+4+5+6+7+8

function summation(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;

    }
    return total;
}
console.log(summation(8));

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
console.log("--2.6--");
//! Ex2.6 - Years and Centuries

