//! Ex3.1 - Growth Of population

//* 1000 + 0.02 + 50 = 1070;

let p0 = 1000;
let percent = 0.02;
let aug = 50;
let p = 1200;

function nb_year(p0, percent, aug, p) {
    let years = 0;
    if (percent % 1 === 0) {
        percent = percent / 100;
    }
    while (p0 <= p) {
        p0 = (p0 + (p0 * percent) + aug);
        years++;
    }
    return years;
}

console.log("--3.1--");
console.log(nb_year(p0, percent, aug, p));
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1300, 3, 200, 4000));

//---------------------------------------------------------------------

//! Ex3.2 - People on the Bus

// function peopleOnTheBus(peopleIn, peopleOut) {
//    let total = peopleIn - peopleOut;
//     return total;
// }
console.log("--3.2--");
// console.log(peopleOnTheBus(5, 2));
// console.log(peopleOnTheBus(5, 2));
// console.log(peopleOnTheBus(5, 2));
// console.log(peopleOnTheBus(5, 2));


let number = function(busStops){
  let peopleIn = 0;
  let peopleOut = 0;
    for (let i=0; i<busStops.length; i++) {
      peopleIn += busStops[i][0];
      peopleOut += busStops[i][1];
  }
  return peopleIn - peopleOut;
}

console.log(number(4));




   
// var number = function (busStops) {
//     let x = 0;
//     busStops.forEach(a => x = x + a[0] - a[1]);
//     return x
// }