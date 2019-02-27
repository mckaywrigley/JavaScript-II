// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let firstName = 'Mckay';
function hello() {
  let lastName = 'Wrigley';
  console.log(`Hello ${firstName} ${lastName}`);
}

hello();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let num1 = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.  
  num1 += 1;
  return num1;
};
// Example usage: const newCounter = counter();
console.log(counter());  // 1
console.log(counter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let num2 = 0;
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  return counterObj = {
    // `increment` should increment a counter variable in closure scope and return it.
    increment: () => {
      num2 += 1;
      return num2;
    },
    // `decrement` should decrement the counter variable and return it.
    decrement: () => {
      num2 -= 1;
      return num2;
    }
  }
};

console.log(counterFactory().increment()); // 1
console.log(counterFactory().increment()); // 2
console.log(counterFactory().increment()); // 3
console.log(counterFactory().decrement()); // 2
console.log(counterFactory().decrement()); // 1
console.log(counterFactory().decrement()); // 0