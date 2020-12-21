"use strict";

var chalk = require('chalk');

var readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

var question = chalk.cyan('What\'s your name?');
readline.question(question + '\n', function (name) {
  console.log(chalk.cyan("Hi ".concat(name)));
  readline.close();
});