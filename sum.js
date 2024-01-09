// Write a node program that takes in an unlimited number
// of command line arguments, goes through each and prints
// out the sum of them. If any argument is not a whole number,
// skip it. Do support negative numbers though. If any argument
// is not a number, output an error message. We need at least 2 arguments.

// Extract the command line arguments

const args = process.argv.slice(2);
console.log('args:', args);

// edge case: do we have at least 2 arguments? => error message
if (args.length < 2) {
  console.log(`Error: please enter at least 2 arguments`);
  process.exit();
}

// iterate through the arguments

// for loop
// for of => more readable => do we need the index
// c-style loop (for i=0; i< args.length; i++) => harder to read

// accumulator
let total = 0;

for (let arg of args) {
  // add them up to do the sum

  // edge case: If any argument is not a whole number, skip it.
  // check remainder => modulo (%) => Number(arg) % 1 === 0
  // isInteger

  if (isNaN(Number(arg))) {
    console.log(`Error: please enter only numbers`);
    // stop execution here
    process.exit(); // this is meaningful
  }

  if (Number.isInteger(Number(arg))) {
    total += Number(arg);
  }

  // edge case: If any argument is not a number, output an error message.

  // is it a string?
  // console.log("arg:", arg, "total:", total, "type:", typeof Number(arg));
}

console.log('Total:', total);
