// It must be at least 8 characters long.
// It must contain at least one uppercase letter, one lowercase letter, one number, and one special character

function generateRandomPassword(passwordLength: number = 8): string {
  let hasSpecialChar: boolean = false;
  let hasLowerChar: boolean = false;
  let hasUpperChar: boolean = false;
  let hasNumberChar: boolean = false;

  let randomPassword: string = new Array(passwordLength)
    .fill('', 0, passwordLength)
    .reduce((val: string, string: string) => {
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

type charGroup = 'special' | 'number' | 'lowercase' | 'uppercase';

interface charRange {
  0: number; // lower bound of character range
  1: number; // upper bound of character range
  2: charGroup; // group that character belongs to
}
const charRanges: charRange[] = [
  //ASCII ranges
  [33, 47, 'special'], // special characters: ! " # $ % & ' ( ) * + , - . /
  [48, 57, 'number'], // number characters: 0 - 9
  [58, 64, 'special'], // special characters: : ; < = > ? @
  [65, 90, 'uppercase'], // upperCase characters A to Z
  [91, 96, 'special'], // special characters: [ \ ] ^ _ `
  [97, 122, 'lowercase'], // lowercase characters a to z
  [123, 126, 'special'], // special characters: { | } ~
];

interface character {
  character: string; // eg '!'
  group: charGroup; // eg 'special'
}

function generateRandomCharacter(): character {
  const randomNum = Math.floor(Math.random() * 93) + 33;

  const charRange = charRanges.find((range) => {
    return randomNum >= range[0] && randomNum <= range[1];
  });
  if (charRange === undefined) throw 'charRange is empty';
  return { character: String.fromCharCode(randomNum), group: charRange[2] };
}

function AddRequiredCharacterToString(string: string, missingGroup: charGroup) {
  const filteredRanges = charRanges.filter((range) => {
    return range[2] === missingGroup;
  });

  const charCodes: number[] = [];
  const chars: number[] = filteredRanges.reduce((chars, range) => {
    const [lowerRange, upperRange] = [range[0], range[1]];

    for (let i = lowerRange; i < upperRange; i++) {
      chars.push(i);
    }
    return chars;
  }, charCodes);

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

function errorHandling(passwordLength: number): void {
  if (!Number.isFinite(passwordLength))
    console.error('password is not a finite number');
  if (passwordLength < 1) console.error('password is less than 1');
}

console.log(generateRandomPassword());

// Get ASCII values
'!'.charCodeAt(0); //?
// Get char from ASCII code
String.fromCharCode(50); //?
