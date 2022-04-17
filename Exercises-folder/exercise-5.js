//! Basic Iteration Logic

//? Ex5.1 - trimming string
//* It's pretty straightforward. Your goal is to create a function that 
//* removes the first and last characters of a string.You're given one 
//* parameter, the original string.You don't have to worry with strings 
//* with less than two characters.

    const string = "Hello, My name is Karam"
    function trimFirstLast(str) {
        return str.slice(1, -1);;
    }

console.log("--5.1--");
console.log(trimFirstLast(string));
//---------------------------------------------------------------------
console.log("--5.2--");

//? Ex5.2 - String Repeat
//* Write a function called repeat_str which repeats the given string src
//* exactly count times. repeatStr(6, "I") // "IIIIII"
//* repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

const strToRepeat = "Karam";

const repeatStr = (count, str) => {
    return str.repeat(count);
}
console.log(repeatStr(4, strToRepeat));
//---------------------------------------------------------------------
console.log("--5.3--");

//? Ex5.3 - To Camel Case
//* omplete the method/function so that it converts dash/underscore delimited 
//* words into camel casing. The first word within the output should be capitalized
//* only if the original word was capitalized (known as Upper Camel Case, also often 
//* referred to as Pascal case).

function toWeirdCase(text){
    let arr = text.split('');
    for (let i = 0; i < arr.length; i++){
        if ( )
    }
}
console.log(toWeirdCase('String'));

//---------------------------------------------------------------------
console.log("--5.4--");

//? Ex5.4 - To Weird Case

function toWeirdCase(text){
    
    let arr = text.split('');
    for (let i = 0; i < arr.length; i++){
        if(i % 2 == 0)
         {
            arr.splice(i, 1, arr[i].toUpperCase());
        }
    }
    return arr.join("");
}
console.log(toWeirdCase('String'));

//---------------------------------------------------------------------
console.log("--5.5--");

//? Ex5.4 - To Weird Case

function myName(text){
    let arr = text.split("");
    let text2 = [];
    text2.push(arr[0].toUpperCase());
    text2.push('.');
    for (let i = 1; i < arr.length; i++){
        if (arr[i] === " "){
            text2.push(arr[i+1].toUpperCase());
        }
    }
    return text2.join("");
}
console.log(myName("Patrick Feeney"));

//---------------------------------------------------------------------
console.log("--5.6--");

//? Ex5.6 - Mask

function maskify(number){
    let number2 = number.toString();
    let arr = number2.split("");
    let arr2 = [];
    for (let i = 0; i < arr.length - 4; i++){
        arr2.push('#');
    }
    arr2.push(arr[arr.length - 4]);
    arr2.push(arr[arr.length - 3]);
    arr2.push(arr[arr.length - 2]);
    arr2.push(arr[arr.length - 1]);
    return arr2.join("");
}
console.log(maskify('4556364607935616'));

//---------------------------------------------------------------------
console.log("--5.7--");

//? Ex5.7 - shortest words

let str = "hello my name is apple";
function word (str) {
let arr = str.split(" ");
let check = [];
for (let i = 0; i < arr.length; i++) {
    check.push(arr[i].length);
}
return Math.min.apply(Math, check);
}
console.log(word(str));
