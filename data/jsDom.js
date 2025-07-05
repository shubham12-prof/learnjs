export const jsDomContent = [
    {
        id: 1,
        title: "What is the DOM?",
        description:
            "DOM (Document Object Model) is a tree-like structure of your HTML page. JavaScript can interact with and manipulate this structure to change the webpage dynamically.",
        code: `// HTML structure becomes a DOM tree
// JavaScript can access and modify it
document.title; // Gets the page title
document.body.style.backgroundColor = "lightblue";`
    },
    {
        id: 2,
        title: "Selecting Elements",
        description: "You can select elements using methods like `getElementById`, `querySelector`, etc.",
        code: `document.getElementById("main");           // By ID
document.getElementsByClassName("box");   // By class (HTMLCollection)
document.querySelector(".nav");           // First match
document.querySelectorAll("p");           // All <p> elements (NodeList)`
    },
    {
        id: 3,
        title: "Changing Text & HTML",
        description: "Use `textContent`, `innerText`, and `innerHTML` to update content.",
        code: `const title = document.querySelector("h1");
title.textContent = "Updated Text";       // Just the text
title.innerHTML = "<em>Emphasized</em>";  // With HTML`
    },
    {
        id: 4,
        title: "Changing CSS with JS",
        description: "You can directly change styles using the `style` property.",
        code: `const box = document.querySelector(".box");
box.style.backgroundColor = "red";
box.style.fontSize = "20px";`
    },
    {
        id: 5,
        title: "Adding & Removing Classes",
        description: "Use `classList` to add, remove, or toggle CSS classes.",
        code: `const element = document.querySelector("#main");
element.classList.add("highlight");
element.classList.remove("hidden");
element.classList.toggle("active");`
    },
    {
        id: 6,
        title: "Working with Attributes",
        description: "Use `getAttribute`, `setAttribute`, `removeAttribute` to handle element attributes.",
        code: `const img = document.querySelector("img");
img.getAttribute("src");            // Get the src
img.setAttribute("alt", "My Image"); // Set a new alt
img.removeAttribute("title");       // Remove title`
    },
    {
        id: 7,
        title: "Creating Elements",
        description: "Use `document.createElement()` to create new HTML elements.",
        code: `const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
document.body.appendChild(newDiv);`
    },
    {
        id: 8,
        title: "Appending / Removing Elements",
        description: "Use `append`, `appendChild`, `remove`, `removeChild`, `insertBefore`.",
        code: `const ul = document.querySelector("ul");
const li = document.createElement("li");
li.textContent = "Item";

ul.appendChild(li);           // Add at end
ul.removeChild(li);           // Remove
ul.insertBefore(li, ul.firstChild); // Insert at top`
    },
    {
        id: 9,
        title: "Event Listeners",
        description: "Use `addEventListener()` to run code when something happens (click, input, etc).",
        code: `const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Button clicked!");
});`
    },
    {
        id: 10,
        title: "Event Object & Target",
        description: "`event.target` gives the clicked element; useful in dynamic interactions.",
        code: `document.addEventListener("click", function(event) {
  console.log(event.target); // What was clicked
});`
    },
    {
        id: 11,
        title: "Event Delegation",
        description:
            "Instead of adding listeners to each child, add one to the parent and detect children with `event.target`.",
        code: `document.querySelector("ul").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.style.color = "blue";
  }
});`
    },
    {
        id: 12,
        title: "Keyboard & Input Events",
        description: "React to keyboard typing, form changes, etc.",
        code: `document.querySelector("input").addEventListener("input", function(e) {
  console.log("You typed:", e.target.value);
});`
    },
    {
        id: 13,
        title: "Form Submission",
        description: "Intercept form submission using `submit` event.",
        code: `document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload
  alert("Form submitted!");
});`
    },
    {
        id: 14,
        title: "DOM Traversal",
        description: "Use `.parentNode`, `.children`, `.nextElementSibling`, etc. to move in the DOM tree.",
        code: `const item = document.querySelector("li");
item.parentNode;               // Go to parent
item.children;                 // Get children
item.nextElementSibling;      // Go to next item`
    },
    {
        id: 15,
        title: "setTimeout & setInterval",
        description: "Run DOM changes after delays or repeatedly.",
        code: `setTimeout(() => {
  document.body.style.background = "green";
}, 2000); // 2 sec later

let count = 0;
const timer = setInterval(() => {
  console.log(++count);
  if (count === 5) clearInterval(timer);
}, 1000);`
    }
];
