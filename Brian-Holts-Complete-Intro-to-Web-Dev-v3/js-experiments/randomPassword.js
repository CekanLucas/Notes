// It must be at least 8 characters long.
// It must contain at least one uppercase letter, one lowercase letter, one number, and one special character

function generateRandomPassword(characterLimit = 8) {
  let hasSpecialChar = false;
  const randomPassword = new Array(characterLimit)
    .fill('', 0, characterLimit)
    .reduce((val, string) => {
      const char = generateRandomCharacter();
      if (!hasSpecialChar && isSpecialCharacter(char)) hasSpecialChar = true;
      string = string + char;
      return val + string;
    }, '');
  return hasSpecialChar
    ? randomPassword
    : AddSpecialCharacterToString(randomPassword);
}

function generateRandomCharacter() {
  const randomNum = Math.floor(Math.random() * 26) + 65;
  const upperLowerOrSpecial = Math.floor(Math.random() * 4);
  return upperLowerOrSpecial === 1
    ? String.fromCharCode(randomNum)
    : upperLowerOrSpecial === 2
    ? String.fromCharCode(randomNum).toLowerCase()
    : generateRandomSpecialCharacter();
}
function generateRandomSpecialCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
function isSpecialCharacter(char) {
  const asciiCode = char.charCodeAt(char);
  return asciiCode >= 33 && asciiCode <= 47 ? true : false;
}
function AddSpecialCharacterToString(string) {
  const specChar = generateRandomSpecialCharacter();
  const randomPosition = Math.floor(Math.random() * string.length);
  const modifiedString =
    string.slice(0, randomPosition) +
    specChar +
    string.slice(randomPosition + 1);
  return modifiedString;
}

console.log(`generateRandomCharacter:\t${generateRandomCharacter()}`);

console.log(generateRandomPassword()); // => string

// Get ASCII values for uppercase letters (A-Z)
const uppercaseStart = 'A'.charCodeAt(0); //=> 65
const uppercaseEnd = 'Z'.charCodeAt(0); //==> 90

// Get ASCII values for lowercase letters (a-z)
const lowercaseStart = 'a'.charCodeAt(0); //?
const lowercaseEnd = 'z'.charCodeAt(0); //?

// Get ASCII values for special characters (!-/)
const specialStart = '!'.charCodeAt(0); //?
const specialEnd = '/'.charCodeAt(0); //?

String.fromCharCode(90);

let i = 33;
while (i <= 47) {
  console.log(
    `The ASCII character from code ' ${i} ' is ' ${String.fromCharCode(i)} '`
  );
  i++;
}

/* In the isSpecialCharacter function, you can simplify the return statement to just return asciiCode >= 33 && asciiCode <= 47;, since >= and <= operators already return true or false.

In the generateRandomSpecialCharacter function, you might want to adjust the range of the random number generator to include a wider range of special characters. For example, you could use String.fromCharCode(Math.floor(Math.random() * 15) + 33) to generate a character code between 33 and 47 (inclusive), but you could also include characters from other ASCII ranges, such as 58 to 64, 91 to 96, and 123 to 126.

You might want to add some error handling in case the characterLimit parameter is less than 1 or is not a number. For example, you could add a check at the beginning of the generateRandomPassword function to ensure that characterLimit is a positive number. */