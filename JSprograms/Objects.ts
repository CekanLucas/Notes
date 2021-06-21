// Object Literal

const myObject = {
  property: "value",
  otherProperty: 77,
  "obnoxious poperty": () => {
    // do stuff
  },
};

myObject.property; // dot notional
myObject["obnoxious poperty"]; // bracket notation

// Object Constructors

function Player(name: string, marker: string) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
}

const player = new Player("Lucas", "X");
player.sayName();

// Exercise

function Book(
  title: string,
  author: string,
  numPages: number,
  didRead: boolean
) {
  this.title = title;
  this.author = author;
  this.pages = numPages;
  this.didRead = didRead;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.didRead ? "have read" : "not read yet"
    }`;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.info());

// Prototypal inheritance
function PrintStuff(myDocuments: string) {
  this.documents = myDocuments;
}

// We add the print () method to PrintStuff prototype property so that other instances (objects) can inherit it:
PrintStuff.prototype.print = function () {
  console.log(this.documents);
};

// Create a new object with the PrintStuff () constructor, thus allowing this new object to inherit PrintStuff's properties and methods.
var newObj = new PrintStuff("I am a new Object and I can print.");

// newObj inherited all the properties and methods, including the print method, from the PrintStuff function. Now newObj can call print directly, even though we never created a print () method on it.
newObj.print(); //I am a new Object and I can print.
