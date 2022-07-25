'use strict';

//to generate random value

// console.log(Math.random()); //it generates b/W 0-1
// console.log(Math.random() * 10) + 1; //b/w 1-10

// console.log(Math.trunc(23.7456)); //it removes the decimal points
// console.log(Math.trunc(Math.random() * 10) + 1);

/* //to generate a random num b/w the range
const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomNum(5, 10));
 */
/* 
//rounds the value to the nearest
console.log(Math.round(23.5));
console.log(Math.round(23.4));
console.log(Math.round(23.9)); */

/* 
//it rounds the value to the up
console.log(Math.ceil(10.3));
console.log(Math.ceil(10.9));
console.log(Math.ceil(-10.5)); */

/* 
//rounds value to the down
console.log(Math.floor(10.9));
console.log(Math.floor(10.3));
console.log(Math.floor(-10.1));
 */

/* 
//diff b/w floor and trunc
//if the value is same it removes the decimal point. but it wont work same for the negative value
console.log(Math.trunc(-3.5));
console.log(Math.floor(-3.5));
 */
/* 
//sqrt=> it gives the square root of the value
console.log(Math.sqrt(25));

console.log(25 ** (1 / 2));
 */
/* 
//constant value
console.log(Math.PI);
console.log(Math.PI * Number.parseFloat('10.2px') ** 2); 
 */

/* console.log((2.34).toFixed(0));
console.log((2.345).toFixed(2));
console.log(typeof (1.305).toFixed(2)); //type of tofixed always the strings

const check = num => (num % 2 == 0 ? 'even' : 'odd');
console.log(check(9));

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 100000000000);
 */

// const now = new Date();
// console.log(now);

// console.log(new Date('december 24, 2022'));

// console.log(new Date(2022, 10, 5, 9, 29, 25));

// console.log(new Date(0));
// console.log(new Date(1));
// console.log(new Date(2));
// console.log(new Date(3));

console.log(daysPassed(new Date(2022, 3, 4), new Date(2022, 3, 24)));
