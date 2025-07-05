export const jsExtrasContent = [
    // ERROR HANDLING
    {
        id: 1,
        title: "try...catch",
        description: "Used to handle runtime errors in a safe way without crashing the script.",
        code: `try {
  let result = riskyFunction();
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
}`
    },
    {
        id: 2,
        title: "finally Block",
        description: "Code inside `finally` runs no matter what — after `try` or `catch`.",
        code: `try {
  // some code
} catch (err) {
  // error handling
} finally {
  console.log("Always runs!");
}`
    },

    // LOCAL STORAGE
    {
        id: 3,
        title: "localStorage: Save Data",
        description: "`localStorage` stores data that stays even after the page reloads.",
        code: `localStorage.setItem("username", "Shubham");`
    },
    {
        id: 4,
        title: "localStorage: Get Data",
        description: "Retrieve data from localStorage.",
        code: `const user = localStorage.getItem("username");
console.log(user); // Shubham`
    },
    {
        id: 5,
        title: "localStorage: Remove / Clear",
        description: "Delete one or all keys from localStorage.",
        code: `localStorage.removeItem("username");
localStorage.clear(); // removes everything`
    },

    // ES6 FEATURES
    {
        id: 6,
        title: "Destructuring Objects",
        description: "Extract values from objects into variables.",
        code: `const user = { name: "Shubham", age: 25 };
const { name, age } = user;
console.log(name); // Shubham`
    },
    {
        id: 7,
        title: "Destructuring Arrays",
        description: "Extract array values into variables easily.",
        code: `const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first); // red`
    },
    {
        id: 8,
        title: "Spread Operator (...)",
        description: "Expands arrays or objects — used to copy, merge, or pass elements.",
        code: `const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }`
    },
    {
        id: 9,
        title: "Template Literals",
        description: "Use backticks (``) to embed variables in strings.",
        code: `const name = "Shubham";
const message = \`Hello, \${name}!\`;
console.log(message); // Hello, Shubham!`
    },
    {
        id: 10,
        title: "Default Parameters",
        description: "Set default values for function parameters.",
        code: `function greet(name = "Guest") {
  console.log("Hello", name);
}
greet();      // Hello Guest
greet("Aryan"); // Hello Aryan`
    }
];
