console.log(typeof null);
(10).toFixed(2);
(11).toString(16);

const object1 = new Object();
object1.myCustomProperty = 'Awesome!';
console.log(object1.myCustomProperty);

// Built in Objects
const array = new Array();
const date = new Date();
const error = new Error();
const func = new Function();
const object = new Object();
const regExp = new RegExp();

// accessing properties with brackets
const arr = [];
arr['push']('1234');
console.log(arr);

// all function are just objects with internal [[call]] property 
// notice that arguments has a length property, arguments is not a array object
function sum() {
    let result = 0, i = 0, argLength = arguments.length;

    while (i < argLength) {
        result += arguments[i];
        i++;
    }
    return result;
}

console.log(sum(1,2,3, 4));
console.log(sum(3,2));

// function as object method
const person = {
    name: 'Lucas',
    sayName: function(){
        console.log(this.name);
    }
}

person.sayName();