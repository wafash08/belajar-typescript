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
