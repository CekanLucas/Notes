const pouch: any = { coins: 10 };
// equivalent to
// const coins = pouch.coins
const { coins } = pouch;
console.log(coins);
// const {bills} = pouch // undefined
const { bills = 10 } = pouch;
console.log(bills);

const conan = {
  firstName: 'Conan',
  lastName: 'the barbarian',
  height: 178,
  weight: 90,
  email: 'conan.thecimmerian@akilonia.com',
  toString() {
    return this.firstName;
  },
};

const javascriptmancyCourse = {
  signUp(person) {
    const { firstName, lastName } = conan;
    console.log(
      `Thank you ${firstName}, ${lastName}!! You've successfully signed up to our very special Javascript course! Welcome and prepare to learn some javascript!`
    );
  },
};

javascriptmancyCourse.signUp(conan);

const { lastName: title } = conan;
console.log(title);

const bag = {
  leftPocket: {
    tobaccoPouch: ['pipe', 'tobacco'],
  },
  rightpocket: [pouch],
  interior: ['10 pieces of dried meat', 'tiolet paper', 'leprechau\
  n'],
};

const {
  leftPocket: { tobaccoPouch },
} = bag;

console.log(`Let's see what I have in my tobacco pouch : ${tobaccoPouch}`);

