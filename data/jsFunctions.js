export const jsFunctionsContent = [
    {
        id: 1,
        title: "Basic Single Parameter",
        description: "Use when you expect a single input value.",
        code: `function greet(name) {
  console.log("Hello, " + name);
}
greet("Shubham");`
    },
    {
        id: 2,
        title: "Multiple Parameters",
        description: "Use when multiple related values need to be processed.",
        code: `function update(start, end, change) {
  console.log("Start:", start, "End:", end, "Change:", change);
}
update(0, 10, 2);`
    },
    {
        id: 3,
        title: "Default Parameter",
        description: "Use to provide fallback value if argument is not passed.",
        code: `function sayHi(name = "Guest") {
  console.log("Hi, " + name);
}
sayHi(); // Hi, Guest
sayHi("Shubham"); // Hi, Shubham`
    },
    {
        id: 4,
        title: "Rest Parameters",
        description: "Use when you don't know how many arguments will be passed.",
        code: `function sum(...numbers) {
  console.log("Numbers:", numbers);
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15`
    },
    {
        id: 5,
        title: "Destructured Object Parameter",
        description: "Use to directly extract values from objects in function parameters.",
        code: `function showUser({ name, age }) {
  console.log("Name:", name, "Age:", age);
}
showUser({ name: "Shubham", age: 31 });`
    },
    {
        id: 6,
        title: "Destructured Array Parameter",
        description: "Use to extract items from an array directly.",
        code: `function draw([x, y]) {
  console.log("X:", x, "Y:", y);
}
draw([100, 200]);`
    },
    {
        id: 7,
        title: "Mixing Types",
        description: "Use default, object, and rest together for flexibility.",
        code: `function handle(user, options = {}, ...extras) {
  console.log("User:", user);
  console.log("Options:", options);
  console.log("Extras:", extras);
}
handle("Shubham", { admin: true }, "log", "notify");`
    },
    {
        id: 8,
        title: "Arrow Function Parameters",
        description: "Use for concise syntax, especially for callbacks and simple logic.",
        code: `const double = x => x * 2;
console.log(double(4)); // 8

const add = (a, b) => a + b;
console.log(add(5, 7)); // 12

const printUser = ({ name }) => console.log("User:", name);
printUser({ name: "Shubham" });`
    },
    {
        id: 9,
        title: "Function with No Parameters",
        description: "Use when a function does the same job every time without inputs.",
        code: `function sayWelcome() {
  console.log("Welcome to the app!");
}
sayWelcome();`
    },
    {
        id: 10,
        title: "Using arguments object (legacy)",
        description: "Use in older code or to access all arguments in non-arrow functions.",
        code: `function showArguments() {
  console.log(arguments);
}
showArguments(1, 2, 3);`
    },
    {
        id: 11,
        title: "Immediately Invoked Function Expression (IIFE)",
        description: "Use to run a function immediately without polluting the global scope.",
        code: `(function () {
  console.log("IIFE executed");
})();`
    },
    {
        id: 12,
        title: "Async Function with Await",
        description: "Use to handle asynchronous code more cleanly.",
        code: `async function fetchData() {
  const response = await Promise.resolve("Data Loaded");
  console.log(response);
}
fetchData();`
    }
];