"use strict";

// import chalk from 'chalk'
var chalk = require('chalk');

var x = "x";
var y = "y";
console.log(x, y, x + y);
console.log('My %s has %d years', 'cat', 2); // console.log('%o', Number)

/* 
  %s : formats variable as a string 
  %d : formats variable as a number
  %i : formats variable as a interger part only
  %o : formats variable as a object 
*/

/* // console.count()
const oranges = ['orange', 'orange']
const apples = ['just one apple']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
}) */

console.log(chalk.green("Yellow output")); // extra: check out progress bar npm i progress