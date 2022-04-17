//! Advanced Iteration Logic

//? Ex6.1 - Mumbling
console.log("--6.1--");

function accum(text){
    let arr = text.split("");
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j <= i; j++){
            if (j === 0 ) {
              arr2.push(arr[i].toUpperCase());
            } else {
            arr2.push(arr[i].toLowerCase());
            }
        }
        arr2.push('-');
    }
    arr2.pop();
    return arr2.join("");
}
console.log(accum("cwAt"));

//---------------------------------------------------------------------
//? Ex6.2 - Counting Duplicates
console.log("--6.2--");

let myString = 'abababc';
let result = {};
for (let str of myString) {
  result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
}
console.log(result);

//---------------------------------------------------------------------
//? Ex6.3 - organize strings
console.log("--6.3--");

let a = "abcdefghijklmnopqrstuvwxyz";
let b = "xxxxyyyyabklmopq";
function longest(a, b){
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f'
, 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 
'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr = [];
let combin = a + b;
let string = combin.split('');
for (let i = 0; i < alphabet.length; i++){
  for (let j = 0; j < string.length; j++) {
     if ( alphabet[i] === string[j] ){
         arr.push(alphabet[i]);
     }
  }
}
console.log()
  for (let g = 0; g < arr.length; g++) {
      for (let m = 1; m < arr.length; m++) {
          if( arr[g] === arr[m]){
             arr.splice(m, 1);
          }
      }
  }
 return arr.join('');
}
console.log(longest(a, a)); //-> "abcdefklmopqwxy";


//---------------------------------------------------------------------
//? Ex6.4 - organize strings
console.log("--6.4--");

function isIsogram(text) {
 let arr = text.split("");
 let counter = 0;
 for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr.length; j++) {
         if ( arr[i].toUpperCase() == arr[j].toUpperCase() && i !== j) {
             counter++;
         }
     }
 }
   if(counter === 0){
     return true;
 } else {
     return false;
 }
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse")); 
