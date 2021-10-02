// const typicalIdentityFunction = (arg: any): any => arg;

const identityFunction = <Type>(arg: Type): Type => arg;

// same as output:string
const output = <string>identityFunction('mystring')

// Note we dont need to use Type we could rename to input for example
const myIdentity: <input>(arg: input) => input = identityFunction;

console.log(myIdentity);
