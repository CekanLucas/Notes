const chalk = require('chalk')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = chalk.cyan('What\'s your name?')

readline.question(question +'\n', name => {
  console.log(chalk.cyan(`Hi ${name}`))
  readline.close()
})