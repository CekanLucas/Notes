// It must be at least 8 characters long.
// It must contain at least one uppercase letter, one lowercase letter, one number, and one special character

function generateRandomPassword(passwordLength = 8) {
  let hasSpecialChar = false;
  let hasLowerChar = false;
  let hasUpperChar = false;
  let hasNumberChar = false;

  let randomPassword = new Array(passwordLength)
    .fill('', 0, passwordLength)
    .reduce((val, string) => {
      const char = generateRandomCharacter();

      if (!hasSpecialChar && char.group === 'special') hasSpecialChar = true;
      if (!hasLowerChar && char.group === 'lowercase') hasLowerChar = true;
      if (!hasUpperChar && char.group === 'uppercase') hasUpperChar = true;
      if (!hasNumberChar && char.group === 'number') hasNumberChar = true;

      string = string + char.character;
      return val + string;
    }, '');

  if (!hasSpecialChar)
    randomPassword = AddRequiredCharacterToString(randomPassword, 'special');
  if (!hasLowerChar)
    randomPassword = AddRequiredCharacterToString(randomPassword, 'lowercase');
  if (!hasUpperChar)
    randomPassword = AddRequiredCharacterToString(randomPassword, 'uppercase');
  if (!hasNumberChar)
    randomPassword = AddRequiredCharacterToString(randomPassword, 'number');

  return randomPassword;
}

const charRanges = [
  [33, 47, 'special'], // special characters: ! " # $ % & ' ( ) * + , - . /
  [48, 57, 'number'], // number characters: 0 - 9
  [58, 64, 'special'], // special characters: : ; < = > ? @
  [65, 90, 'uppercase'], // upperCase characters A to Z
  [91, 96, 'special'], // special characters: [ \ ] ^ _ `
  [97, 122, 'lowercase'], // lowercase characters a to z
  [123, 126, 'special'], // special characters: { | } ~
];

function generateRandomCharacter() {
  const randomNum = Math.floor(Math.random() * 93) + 33;
  //ASCII ranges

  const charRange = charRanges.find((range) => {
    return randomNum >= range[0] && randomNum <= range[1];
  });
  return { character: String.fromCharCode(randomNum), group: charRange[2] };
}

function AddRequiredCharacterToString(string, missingGroup) {
  const filteredRanges = charRanges.filter((range) => {
    return range[2] === missingGroup;
  });

  const chars = filteredRanges.reduce((chars, range) => {
    const [lowerRange, upperRange] = [range[0], range[1]];

    for (let i = lowerRange; i < upperRange; i++) {
      chars.push(i);
    }
    return chars;
  }, []);

  const requiredChar = String.fromCharCode(
    chars[Math.floor(Math.random() * chars.length + 1)]
  );

  const randomPosition = Math.floor(Math.random() * string.length);
  const modifiedString =
    string.slice(0, randomPosition) +
    requiredChar +
    string.slice(randomPosition + 1);
  return modifiedString;
}

function errorHandling(passwordLength) {
  if (!Number.isFinite(passwordLength))
    console.error('password is not a finite number');
  if (passwordLength < 1) console.error('password is less than 1');
}

console.log(generateRandomPassword());

// Get ASCII values
'!'.charCodeAt(0); // => 33
// Get char from ASCII code
String.fromCharCode(50); //?

/* You might want to add some error handling in case the characterLimit parameter is less than 1 or is not a number. For example, you could add a check at the beginning of the generateRandomPassword function to ensure that characterLimit is a positive number. */
