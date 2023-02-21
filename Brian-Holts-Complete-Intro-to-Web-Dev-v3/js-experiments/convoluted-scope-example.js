const A = "A";
let F; // declared but not assigned a value

function doStuff(B) {
  console.log(B);
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D);
  console.log(H);
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A);
  const G = "G";
}

// In scope even though reassignment was out of scope 
console.log(E); // 3

// Out of Scope for all these, so none will work
// console.log(G); // G is not defined
// doStuff("B"); // D is not defined
// console.log(B); // B is not defined 
// console.log(C); // C is not defined


// here F was declared but assignment was out of scope
console.log(F); // undefined 