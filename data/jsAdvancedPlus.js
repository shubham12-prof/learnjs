export const jsAdvancedPlusContent = [
    {
        id: 1,
        title: "Event Loop",
        description: "The Event Loop is how JavaScript handles asynchronous code. It processes the call stack, callback queue, and microtasks in a cycle.",
        code: `console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout`,
    },
    {
        id: 2,
        title: "Execution Context",
        description: "When JavaScript runs, it creates an Execution Context — a container that holds variables, functions, and the `this` keyword for that scope.",
        code: `function sayHello() {
  let message = "Hello!";
  console.log(message);
}

sayHello();

// Global Execution Context is created first,
// then one for sayHello when it's called.`,
    },
    {
        id: 3,
        title: "Scope",
        description: "Scope defines where variables can be accessed. JavaScript has function scope, block scope (let/const), and global scope.",
        code: `let a = 10;

function test() {
  let b = 20;
  console.log(a); // Accessible
  console.log(b); // Accessible
}

test();
console.log(b); // ❌ Error: b is not defined`,
    },
    {
        id: 4,
        title: "Lexical Scope",
        description: "Lexical scope means a function can access variables defined in its outer scope.",
        code: `function outer() {
  let msg = "I am outer";
  function inner() {
    console.log(msg); // Can access outer variable
  }
  inner();
}

outer();`,
    },
    {
        id: 5,
        title: "Currying",
        description: "Currying is the technique of converting a function with multiple arguments into a series of functions each taking one argument.",
        code: `function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // 10`,
    },
    {
        id: 6,
        title: "Debouncing",
        description: "Debouncing delays the execution of a function until a pause in user activity (e.g., after typing).",
        code: `function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  };
}

window.addEventListener("resize", debounce(() => {
  console.log("Resize event");
}, 500));`,
    },
    {
        id: 7,
        title: "Throttling",
        description: "Throttling ensures a function runs at most once in a given time period, no matter how often it's triggered.",
        code: `function throttle(fn, limit) {
  let waiting = false;
  return function () {
    if (!waiting) {
      fn();
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

window.addEventListener("scroll", throttle(() => {
  console.log("Scroll event");
}, 1000));`,
    }
];
