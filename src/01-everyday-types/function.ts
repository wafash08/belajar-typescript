// Functions are the primary means of passing data around in JavaScript.
// TypeScript allows you to specify the types of both the input and output values of functions.

// 1. parameter type annotations
export function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

greet("wafa"); // works well
// greet(2) // fails: Argument of type "number" is not assignable to parameter of type "string"

// 2. return type annotations
// Return type annotations appear after the parameter list:
export function getFavoriteNumber(): number {
  return 26;
}

// 3. anonymous functions

// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUppercase());
  // Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});

// Contextual typing also applies to arrow functions
names.forEach(s => {
  console.log(s.toUppercase());
  // Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});

// Even though the parameter s didn’t have a type annotation,
// TypeScript used the types of the forEach function, along with the inferred type of the array, to determine the type s will have.

// This process is called contextual typing because the context that the function occurred within informs what type it should have.
