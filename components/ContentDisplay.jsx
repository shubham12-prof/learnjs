import CheatsheetRenderer from "./CheatsheetRenderer";
import {
  jsFunctionsContent,
  jsVariablesContent,
  jsLoopsContent,
  reactStateContent,
  jsArrayMethodsContent,
  jsAdvancedContent,
  jsOOPContent,
} from "../data";
import { jsAdvancedPlusContent } from "@/data/jsAdvancedPlus";
import { jsDomContent } from "@/data/jsDom";
import { jsExtrasContent } from "@/data/jsExtras";

export default function ContentDisplay({ selected }) {
  const content = {
    "js-variables": {
      title: "JavaScript Variables",
      desc: (
        <CheatsheetRenderer
          sections={jsVariablesContent}
          title="JavaScript Variables Cheatsheet(let,const,var, Data Types,
Operators, Conditionals, Loops,
Functions, Array Methods
)"
          subtitle="Use let, const, or var to declare variables. Here's a complete guide:"
        />
      ),
    },
    "js-functions": {
      title: "JavaScript Functions",
      desc: (
        <CheatsheetRenderer
          sections={jsFunctionsContent}
          title="JavaScript Function Parameters Cheatsheet"
          subtitle="Functions are reusable blocks of code. Here's a complete guide to function parameters:"
        />
      ),
    },
    "js-loops": {
      title: "JavaScript Loops",
      desc: (
        <CheatsheetRenderer
          sections={jsLoopsContent}
          title="JavaScript Loops Cheatsheet"
          subtitle="Use loops like for, while, or forEach to repeat actions. Here's a complete guide:"
        />
      ),
    },
    "js-Array": {
      title: "JavaScript Array",
      desc: (
        <CheatsheetRenderer
          sections={jsArrayMethodsContent}
          title="JavaScript Array Cheatsheet"
          subtitle="Use loops like for, while, or forEach to repeat actions. Here's a complete guide:"
        />
      ),
    },
    "js-Advance": {
      title: "JavaScript Advance",
      desc: (
        <CheatsheetRenderer
          sections={jsAdvancedContent}
          title="Advanced JavaScript Cheatsheet(Hoisting, Closures,
Callbacks, Promises, Async/Await,
Fetch API, JSON
)"
          subtitle="Use loops like for, while, or forEach to repeat actions. Here's a complete guide:"
        />
      ),
    },
    "js-AdvancePlus": {
      title: "JavaScript AdvancePlus",
      desc: (
        <CheatsheetRenderer
          sections={jsAdvancedPlusContent}
          title="AdvancedPlus JavaScript Cheatsheet(Event Loop,Execution Context,Scope,Lexical Scope,Currying,Debouncing,Throttling)"
          subtitle="Deep dive into how JavaScript works under the hood:"
        />
      ),
    },
    "js-OOP": {
      title: "Object-Oriented Programming in JavaScript",
      desc: (
        <CheatsheetRenderer
          sections={jsOOPContent}
          title="OOP in JavaScript Cheatsheet"
          subtitle="Learn how to structure JavaScript code using objects and classes:"
        />
      ),
    },
    "js-DOM": {
      title: "DOM Manipulation",
      desc: (
        <CheatsheetRenderer
          sections={jsDomContent}
          title="DOM Manipulation in JavaScript Cheatsheet(Selectors,
Content, Events, Form Handling)"
          subtitle="Learn how to access and manipulate HTML elements dynamically using JavaScript."
        />
      ),
    },
    "js-Extras": {
      title: "Error Handling, Storage & ES6 Features",
      desc: (
        <CheatsheetRenderer
          sections={jsExtrasContent}
          title="JavaScript Extras Cheatsheet"
          subtitle="Covers try/catch, localStorage, and powerful ES6 features like destructuring and template strings."
        />
      ),
    },
    "react-state": {
      title: "React State",
      desc: (
        <CheatsheetRenderer
          sections={reactStateContent}
          title="React State Cheatsheet"
          subtitle="useState allows you to manage component data. Here's a complete guide:"
        />
      ),
    },
    "react-props": {
      title: "React Props",
      desc: "Props are used to pass data from parent to child.",
    },
    "react-hooks": {
      title: "React Hooks",
      desc: "Hooks let you use state and lifecycle features in functional components.",
    },
  };

  const topic = content[selected];

  if (!topic) {
    return (
      <p className="text-gray-500">
        👈 Select a subtopic from the sidebar to begin learning.
      </p>
    );
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">{topic.title}</h1>
      <div className="text-gray-700">
        {typeof topic.desc === "string" ? <p>{topic.desc}</p> : topic.desc}
      </div>
    </div>
  );
}
