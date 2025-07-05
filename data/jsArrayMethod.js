export const jsArrayMethodsContent = [
    {
        id: 1,
        title: "push()",
        description: "Adds an element to the end of the array.",
        code: `let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "mango"]`,
    },
    {
        id: 2,
        title: "pop()",
        description: "Removes the last element from the array.",
        code: `let fruits = ["apple", "banana"];
fruits.pop();
console.log(fruits); // ["apple"]`,
    },
    {
        id: 3,
        title: "unshift()",
        description: "Adds an element to the beginning of the array.",
        code: `let numbers = [2, 3];
numbers.unshift(1);
console.log(numbers); // [1, 2, 3]`,
    },
    {
        id: 4,
        title: "shift()",
        description: "Removes the first element from the array.",
        code: `let numbers = [1, 2, 3];
numbers.shift();
console.log(numbers); // [2, 3]`,
    },
    {
        id: 5,
        title: "map()",
        description: "Creates a new array by applying a function to each element.",
        code: `let nums = [1, 2, 3];
let squared = nums.map(n => n * n);
console.log(squared); // [1, 4, 9]`,
    },
    {
        id: 6,
        title: "filter()",
        description: "Returns a new array with elements that pass the test.",
        code: `let nums = [1, 2, 3, 4];
let even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]`,
    },
    {
        id: 7,
        title: "reduce()",
        description: "Reduces the array to a single value.",
        code: `let nums = [1, 2, 3, 4];
let total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 10`,
    },
    {
        id: 8,
        title: "forEach()",
        description: "Runs a function for each element in the array.",
        code: `let colors = ["red", "green", "blue"];
colors.forEach(color => console.log(color));
// Output: red, green, blue`,
    },
    {
        id: 9,
        title: "find()",
        description: "Returns the first element that matches the condition.",
        code: `let nums = [10, 20, 30];
let found = nums.find(n => n > 15);
console.log(found); // 20`,
    },
    {
        id: 10,
        title: "findIndex()",
        description: "Returns the index of the first match. Returns -1 if not found.",
        code: `let names = ["A", "B", "C"];
let index = names.findIndex(n => n === "B");
console.log(index); // 1`,
    },
    {
        id: 11,
        title: "includes()",
        description: "Checks if an array contains a specific value.",
        code: `let items = ["pen", "pencil"];
console.log(items.includes("pen")); // true`,
    },
    {
        id: 12,
        title: "indexOf()",
        description: "Returns the first index of a value, or -1 if not found.",
        code: `let items = ["pen", "book", "pen"];
console.log(items.indexOf("pen")); // 0`,
    },
    {
        id: 13,
        title: "concat()",
        description: "Merges two or more arrays into one.",
        code: `let a = [1, 2];
let b = [3, 4];
let result = a.concat(b);
console.log(result); // [1, 2, 3, 4]`,
    },
    {
        id: 14,
        title: "slice()",
        description: "Returns a portion of the array without modifying it.",
        code: `let nums = [0, 1, 2, 3, 4];
let part = nums.slice(1, 4);
console.log(part); // [1, 2, 3]`,
    },
    {
        id: 15,
        title: "splice()",
        description: "Adds/removes elements from the array (modifies original).",
        code: `let nums = [1, 2, 3, 4];
nums.splice(2, 1); // remove 1 item at index 2
console.log(nums); // [1, 2, 4]`,
    },
    {
        id: 16,
        title: "sort()",
        description: "Sorts array items alphabetically or with custom logic.",
        code: `let nums = [3, 1, 2];
nums.sort();
console.log(nums); // [1, 2, 3]`,
    },
    {
        id: 17,
        title: "reverse()",
        description: "Reverses the order of the array (modifies original).",
        code: `let letters = ["a", "b", "c"];
letters.reverse();
console.log(letters); // ["c", "b", "a"]`,
    },
    {
        id: 18,
        title: "join()",
        description: "Joins all elements into a single string.",
        code: `let words = ["I", "love", "JS"];
let sentence = words.join(" ");
console.log(sentence); // "I love JS"`,
    },
    {
        id: 19,
        title: "every()",
        description: "Checks if all elements pass the condition.",
        code: `let nums = [2, 4, 6];
let allEven = nums.every(n => n % 2 === 0);
console.log(allEven); // true`,
    },
    {
        id: 20,
        title: "some()",
        description: "Checks if at least one element passes the test.",
        code: `let nums = [1, 2, 3];
let hasEven = nums.some(n => n % 2 === 0);
console.log(hasEven); // true`,
    }
];
