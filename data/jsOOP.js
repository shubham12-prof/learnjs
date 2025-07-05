export const jsOOPContent = [
    {
        id: 1,
        title: "What is OOP?",
        description: "OOP (Object-Oriented Programming) is a way to structure your code using objects that contain data and behavior.",
        code: `// Real-world example
const car = {
  brand: "Toyota",
  drive() {
    console.log("Driving...");
  }
};`
    },
    {
        id: 2,
        title: "Creating Objects",
        description: "You can create objects using object literals, constructors, or classes.",
        code: `// Object Literal
const person = {
  name: "Alice",
  greet() {
    console.log("Hello");
  }
};

// Constructor Function
function Animal(type) {
  this.type = type;
}
const cat = new Animal("Cat");

// ES6 Class
class Dog {
  constructor(name) {
    this.name = name;
  }
}
const d = new Dog("Barky");`
    },
    {
        id: 3,
        title: "`this` keyword",
        description: "`this` refers to the current object where the function is called.",
        code: `const obj = {
  name: "Laptop",
  showName() {
    console.log(this.name); // Laptop
  }
};

obj.showName();`
    },
    {
        id: 4,
        title: "Prototypes",
        description: "Every object has a prototype. You can add methods to a constructor’s prototype to share across instances.",
        code: `function User(name) {
  this.name = name;
}
User.prototype.sayHello = function () {
  console.log("Hi, " + this.name);
};

const u1 = new User("Alex");
u1.sayHello();`
    },
    {
        id: 5,
        title: "Inheritance",
        description: "Objects can inherit features from other objects using `extends` or prototype chaining.",
        code: `// ES6 class inheritance
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}
const d = new Dog();
d.speak();`
    },
    {
        id: 6,
        title: "Encapsulation",
        description: "Encapsulation means keeping internal details hidden. Use closures or private fields.",
        code: `function Secret() {
  let data = "hidden";
  return {
    reveal() {
      return data;
    }
  };
}

const s = Secret();
console.log(s.reveal()); // hidden`
    },
    {
        id: 7,
        title: "Abstraction",
        description: "Abstraction hides complex logic and shows only what's necessary.",
        code: `class Car {
  startEngine() {
    this._injectFuel();
    this._sparkPlugs();
    console.log("Engine started");
  }

  _injectFuel() {}   // private-like methods (convention)
  _sparkPlugs() {}
}

const myCar = new Car();
myCar.startEngine();`
    },
    {
        id: 8,
        title: "Polymorphism",
        description: "Same method name but different behavior in different classes.",
        code: `class Animal {
  speak() {
    console.log("Animal sound");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}
new Cat().speak();`
    },
    {
        id: 9,
        title: "`call()` method",
        description: "`call` allows you to call a function with a specific `this` value.",
        code: `function greet() {
  console.log("Hello " + this.name);
}

const user = { name: "Sam" };
greet.call(user); // Hello Sam`
    },
    {
        id: 10,
        title: "`apply()` method",
        description: "`apply` is similar to `call`, but it takes arguments as an array.",
        code: `function introduce(age, city) {
  console.log(\`\${this.name} is \${age} years old from \${city}\`);
}

const user = { name: "Lilly" };
introduce.apply(user, [25, "Delhi"]);`
    },
    {
        id: 11,
        title: "`bind()` method",
        description: "`bind` returns a new function with `this` permanently set.",
        code: `const person = {
  name: "Raj",
  greet() {
    console.log("Hi " + this.name);
  }
};

const greetLater = person.greet.bind(person);
setTimeout(greetLater, 1000);`
    },
    {
        id: 12,
        title: "Private Fields in Classes",
        description: "Use `#` to define truly private properties in modern JavaScript.",
        code: `class Bank {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new Bank();
acc.deposit(1000);
console.log(acc.getBalance()); // 1000`
    }
];
