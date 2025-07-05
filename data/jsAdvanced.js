export const jsAdvancedContent = [
    {
        id: 1,
        title: "Hoisting",
        description: "JavaScript moves variable and function declarations to the top of their scope before execution. `var` is hoisted with `undefined`, while `let` and `const` are hoisted but not initialized.",
        code: `console.log(x); // undefined
var x = 5;

console.log(y); // ❌ ReferenceError
let y = 10;`,
    },
    {
        id: 2,
        title: "Closures",
        description: "A closure is a function that can access variables from its outer scope even after the outer function has returned.",
        code: `function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2`,
    },
    {
        id: 3,
        title: "Callback Functions",
        description: "A callback is a function passed into another function to be called later, often after an async task completes.",
        code: `function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Shubham", sayBye);`,
    },
    {
        id: 4,
        title: "Promises",
        description: "A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.",
        code: `const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task complete!");
  } else {
    reject("Something went wrong");
  }
});

promise
  .then(res => console.log(res))
  .catch(err => console.log(err));`,
    },
    {
        id: 5,
        title: "Async/Await",
        description: "`async` and `await` provide a cleaner way to work with Promises. `await` pauses execution until the Promise resolves.",
        code: `async function fetchData() {
  try {
    let res = await fetch("https://api.example.com/data");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}

fetchData();`,
    },
    {
        id: 6,
        title: "Fetch API",
        description: "The Fetch API is a modern way to make HTTP requests in the browser and returns a Promise.",
        code: `fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));`,
    },
    {
        id: 7,
        title: "JSON (JavaScript Object Notation)",
        description: "JSON is a data format for exchanging data between systems. It is commonly used with APIs.",
        code: `let user = { name: "Shubham", age: 30 };
let json = JSON.stringify(user);
console.log(json); // '{"name":"Shubham","age":30}'

let obj = JSON.parse(json);
console.log(obj.name); // Shubham`,
    }
];
