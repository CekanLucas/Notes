/* 
    SECRET LIFE OF OBJECTS
        FROM ELOQUENT JAVASCRIPT

Different pieces of such a program interact with each other through
interfaces, limited sets of functions or bindings that provide useful func-
tionality at a more abstract level, hiding their precise implementation.
*/

type obj= {[key: string]: any}

const rabbit: obj = {}; 
rabbit.speak = (line: string): void => {
    console.log(`The rabbit says '${line}'`);
}
rabbit.speak("I'm alive.");

function speak(line: string){ // cant use arrow to use for this
    return `The ${this.type} rabbit says '${line}'`;
}
const whiteRabbit = {type: "white", speak};
const hungryRabbit = {type: "hungry", speak};
console.log(
    whiteRabbit.speak("Oh my ears and whiskers how late it's getting!")
);
console.log(
    hungryRabbit.speak("I could use a carrot right now.")   
)

// use of call method 
speak.call(hungryRabbit, "Burp!")

function normalize() {
    // if you use function keyword code wouldnt work 
    // arrow function could see local this
    return this.coords.map((n: number) => n / this.length);
}

console.log(
    normalize.call({coords: [0, 2, 3], length: 5})
)

console.log(
    Object.getPrototypeOf({})
)