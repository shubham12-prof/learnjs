export const jsVariablesContent = [
    {
        id: 1,
        title: "let keyword",
        description: "Declares a block-scoped variable that can be updated but not redeclared in the same scope.",
        code: `let name = "Alice";
name = "Bob"; // Allowed
console.log(name); // Bob`,
    },
    {
        id: 2,
        title: "const keyword",
        description: "Declares a block-scoped variable that cannot be updated or redeclared.",
        code: `const pi = 3.14;
// pi = 3.14159; // ❌ Error
console.log(pi); // 3.14`,
    },
    {
        id: 3,
        title: "var keyword",
        description: "Old way to declare variables. It is function-scoped and allows redeclaration.",
        code: `var city = "Delhi";
var city = "Mumbai"; // ✅ Allowed
console.log(city); // Mumbai`,
    },
    {
        id: 4,
        title: "String",
        description: "Used to store text values. Enclosed in single or double quotes.",
        code: `let greeting = "Hello";
console.log(greeting); // Hello`,
    },
    {
        id: 5,
        title: "Number",
        description: "Used to store numeric values. Can be integers or decimals.",
        code: `let age = 31;
let price = 19.99;
console.log(age, price); // 31 19.99`,
    },
    {
        id: 6,
        title: "Boolean",
        description: "Represents true or false. Used in logical conditions.",
        code: `let isOnline = true;
console.log(isOnline); // true`,
    },
    {
        id: 7,
        title: "Null",
        description: "Represents a deliberate non-value.",
        code: `let selectedColor = null;
console.log(selectedColor); // null`,
    },
    {
        id: 8,
        title: "Undefined",
        description: "A variable declared but not assigned a value is undefined.",
        code: `let result;
console.log(result); // undefined`,
    },
    {
        id: 9,
        title: "Array",
        description: "A list-like collection that stores multiple values.",
        code: `let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // apple`,
    },
    {
        id: 10,
        title: "Object",
        description: "A collection of key-value pairs representing structured data.",
        code: `let user = {
  name: "Shubham",
  age: 31,
};
console.log(user.name); // Shubham`,
    },
    {
        id: 11,
        title: "typeof operator",
        description: "Used to check the type of a variable or value.",
        code: `let name = "Sam";
console.log(typeof name); // string`,
    },
    {
        id: 12,
        title: "Dynamic Typing",
        description: "JavaScript variables can hold any type and can change type at runtime.",
        code: `let x = 10; // number
x = "ten"; // now a string
console.log(typeof x); // string`,
    },
    {
        id: 13,
        title: "Template Literals",
        description: "Allows embedding expressions in strings using backticks (` `).",
        code: `let name = "Shubham";
let greeting = \`Hello, \${name}!\`;
console.log(greeting); // Hello, Shubham!`,
    },
    {
        id: 14,
        title: "Type Conversion (Implicit)",
        description: "JavaScript automatically converts types when needed.",
        code: `let result = "5" + 2;
console.log(result); // "52" (number is converted to string)`,
    },
    {
        id: 15,
        title: "Type Conversion (Explicit)",
        description: "Manually convert values using String(), Number(), Boolean(), etc.",
        code: `let num = "123";
let converted = Number(num);
console.log(converted); // 123 (as number)`,
    },
    {
        id: 16,
        title: "Hoisting",
        description: "`var` declarations are hoisted (moved to the top), but not `let` or `const`.",
        code: `console.log(a); // undefined (not error)
var a = 10;

// But with let or const:
// console.log(b); // ❌ ReferenceError
// let b = 20;`,
    }
];
