// basic class syntax
class MyClass {
    prop = value; // property

    constructor(/*  */) { // constructor
        // ...
    }

    method(/*  */) {} // method

    get something(/*  */) {} // getter method
    set something(/*  */) {} // setter method

    [Symbol.iterator]() {} // method with computed name (symbol here)
    // ...
    method1() {
        /*  */
    }
    method2() {
        /*  */
    }
    method3() {
        /*  */
    }
    /* ... */
}

// MyClass is technically a function (the one that we provide as constructor), while methods, getters and setters are written to MyClass.prototype.

// class User {
//   name: string;
//   // constructor automatically called whith new keyword
//   constructor(name: string) {
//     // invokes the setter
//     this.name = name;
//   }

//   sayHi() {
//     console.log(this.name);
//   }
// }
// const user = new User("John");
// user.sayHi();

// see classes are a type of function
// console.log(typeof User);

// Rewriting class in function syntax
function User_func(name: string) {
  //create constructor function
  this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it

//add the method to prototype
User_func.prototype.sayHi = function () {
  console.log(this.name);
};

const user_func = new User_func("John");
user_func.sayHi();

class User {
  private _name: string;

  constructor(name: string) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }
}

let user = new User("John");
console.log(user.name);

user = new User("");

class ComputedNames {
  [x: string]: any;
  ["say" + "Hi"]() {
    console.log("Hello");
  }
}
new ComputedNames().sayHi();
