export const jsLoopsContent = [
    {
        id: 1,
        title: "for loop",
        description: "Repeats a block of code a set number of times.",
        code: `for (let i = 0; i < 5; i++) {
  console.log("Count:", i);
}
// Output: Count: 0 to 4`,
    },
    {
        id: 2,
        title: "while loop",
        description: "Repeats code as long as the condition is true.",
        code: `let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0 to 4`,
    },
    {
        id: 3,
        title: "do...while loop",
        description: "Runs the code at least once, then checks the condition.",
        code: `let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// Output: 0 to 4`,
    },
    {
        id: 4,
        title: "for...of loop",
        description: "Loops through values of an iterable (like arrays or strings).",
        code: `let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output: apple, banana, cherry`,
    },
    {
        id: 5,
        title: "for...in loop",
        description: "Loops through keys (property names) of an object.",
        code: `let user = { name: "Sam", age: 25 };
for (let key in user) {
  console.log(key, user[key]);
}
// Output: name Sam, age 25`,
    },
    {
        id: 6,
        title: "break statement",
        description: "Stops the loop completely when a condition is met.",
        code: `for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 0 to 4`,
    },
    {
        id: 7,
        title: "continue statement",
        description: "Skips the current loop iteration and continues with the next one.",
        code: `for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Output: 0, 1, 3, 4`,
    },
    {
        id: 8,
        title: "Array.forEach()",
        description: "Calls a function for each item in an array. Cannot break or return.",
        code: `let colors = ["red", "green", "blue"];
colors.forEach(function(color) {
  console.log(color);
});
// Output: red, green, blue`,
    },
    {
        id: 9,
        title: "Array.map()",
        description: "Creates a new array by transforming each item.",
        code: `let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]`,
    },
    {
        id: 10,
        title: "Array.filter()",
        description: "Creates a new array with items that pass a test.",
        code: `let nums = [1, 2, 3, 4];
let even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]`,
    },
    {
        id: 11,
        title: "Array.reduce()",
        description: "Reduces all items into a single value (e.g., total sum).",
        code: `let nums = [1, 2, 3, 4];
let total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 10`,
    },
    {
        id: 12,
        title: "Nested Loops",
        description: "Loops inside loops. Useful for working with 2D data like matrices.",
        code: `for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(\`i=\${i}, j=\${j}\`);
  }
}
// Output: i=1 j=1, i=1 j=2, i=2 j=1, i=2 j=2`,
    },
];
