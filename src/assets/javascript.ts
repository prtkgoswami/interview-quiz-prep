import { Question } from "@/types/question";

export const Questions : Question[] = [
  {
    id: "js-hoisting-01",
    question: "What will be the output of the following code?",
    relatedCode: "console.log(a);\nvar a = 10;",
    options: ["10", "undefined", "ReferenceError", "null"],
    answer: 1,
    relevantTags: ["hoisting", "var"]
  },
  {
    id: "js-let-tdz-02",
    question: "What will happen when this code runs?",
    relatedCode: "console.log(b);\nlet b = 5;",
    options: ["undefined", "5", "ReferenceError", "null"],
    answer: 2,
    relevantTags: ["let", "tdz"]
  },
  {
    id: "js-closure-03",
    question: "What is logged to the console?",
    relatedCode:
      "function outer() {\n  let count = 0;\n  return function () {\n    count++;\n    console.log(count);\n  };\n}\nconst fn = outer();\nfn();\nfn();",
    options: ["0 0", "1 1", "1 2", "0 1"],
    answer: 2,
    relevantTags: ["closures"]
  },
  {
    id: "js-this-04",
    question: "What will be logged?",
    relatedCode:
      "const obj = {\n  name: 'JS',\n  getName() {\n    return this.name;\n  }\n};\nconst fn = obj.getName;\nconsole.log(fn());",
    options: ["JS", "undefined", "ReferenceError", "TypeError"],
    answer: 1,
    relevantTags: ["this"]
  },
  {
    id: "js-arrow-this-05",
    question: "Why does this log `undefined`?",
    relatedCode:
      "const obj = {\n  value: 10,\n  getValue: () => this.value\n};\nconsole.log(obj.getValue());",
    options: [
      "Arrow functions don't have their own this",
      "this refers to obj",
      "value is not defined",
      "Arrow functions are async"
    ],
    answer: 0,
    relevantTags: ["arrow-functions", "this"]
  },
  {
    id: "js-equality-06",
    question: "What is the result of the comparison?",
    relatedCode: "[] == ![]",
    options: ["true", "false", "TypeError", "undefined"],
    answer: 0,
    relevantTags: ["coercion", "equality"]
  },
  {
    id: "js-typeof-null-07",
    question: "What does `typeof null` return?",
    options: ["null", "object", "undefined", "number"],
    answer: 1,
    relevantTags: ["typeof"]
  },
  {
    id: "js-event-loop-08",
    question: "What is the output order?",
    relatedCode:
      "console.log('A');\nsetTimeout(() => console.log('B'), 0);\nPromise.resolve().then(() => console.log('C'));\nconsole.log('D');",
    options: ["A B C D", "A D B C", "A D C B", "A C B D"],
    answer: 2,
    relevantTags: ["event-loop", "microtask"]
  },
  {
    id: "js-const-mutation-09",
    question: "Why does this code NOT throw an error?",
    relatedCode:
      "const obj = { a: 1 };\nobj.a = 2;",
    options: [
      "const allows mutation of object properties",
      "const is ignored for objects",
      "Objects are immutable",
      "JavaScript auto converts const to let"
    ],
    answer: 0,
    relevantTags: ["const", "immutability"]
  },
  {
    id: "js-array-map-10",
    question: "What is the output?",
    relatedCode:
      "[1, 2, 3].map(parseInt);",
    options: ["[1,2,3]", "[1,NaN,NaN]", "[1,2,NaN]", "Throws error"],
    answer: 1,
    relevantTags: ["array", "map", "parseInt"]
  },
  {
    id: "js-spread-copy-11",
    question: "What kind of copy does spread operator create?",
    options: ["Deep copy", "Shallow copy", "Reference copy", "Immutable copy"],
    answer: 1,
    relevantTags: ["spread", "copy"]
  },
  {
    id: "js-promise-chain-12",
    question: "What is logged?",
    relatedCode:
      "Promise.resolve(1)\n  .then(x => x + 1)\n  .then(x => { throw x; })\n  .catch(err => console.log(err));",
    options: ["1", "2", "undefined", "Promise rejected"],
    answer: 1,
    relevantTags: ["promises"]
  },
  {
    id: "js-async-return-13",
    question: "What does an async function always return?",
    options: ["Value", "Promise", "Callback", "Generator"],
    answer: 1,
    relevantTags: ["async-await"]
  },
  {
    id: "js-for-loop-var-14",
    question: "What is logged?",
    relatedCode:
      "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
    options: ["0 1 2", "3 3 3", "undefined", "Throws error"],
    answer: 1,
    relevantTags: ["closures", "var"]
  },
  {
    id: "js-for-loop-let-15",
    question: "Why does this behave differently?",
    relatedCode:
      "for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
    options: [
      "let creates block-scoped bindings",
      "setTimeout is synchronous",
      "Promises are used",
      "JavaScript optimizes loops"
    ],
    answer: 0,
    relevantTags: ["let", "closures"]
  },
  {
    id: "js-object-keys-16",
    question: "What is the output?",
    relatedCode:
      "const obj = { a: 1, b: 2 };\nconsole.log(Object.keys(obj).length);",
    options: ["1", "2", "undefined", "Error"],
    answer: 1,
    relevantTags: ["objects"]
  },
  {
    id: "js-delete-17",
    question: "What does `delete obj.prop` return?",
    options: ["true if deleted", "false always", "undefined", "Throws error"],
    answer: 0,
    relevantTags: ["delete"]
  },
  {
    id: "js-nan-18",
    question: "Which check correctly identifies NaN?",
    options: [
      "value === NaN",
      "typeof value === 'NaN'",
      "Number.isNaN(value)",
      "value == NaN"
    ],
    answer: 2,
    relevantTags: ["NaN"]
  },
  {
    id: "js-set-vs-array-19",
    question: "Why use Set over Array?",
    options: [
      "Faster rendering",
      "Guaranteed unique values",
      "Better memory usage",
      "Preserves duplicates"
    ],
    answer: 1,
    relevantTags: ["set"]
  },
  {
    id: "js-rest-params-20",
    question: "What does rest parameter collect?",
    options: [
      "All arguments into an array",
      "Only extra arguments",
      "Only named arguments",
      "Arguments object"
    ],
    answer: 0,
    relevantTags: ["rest"]
  },
  {
    id: "js-arguments-21",
    question: "Why is `arguments` discouraged?",
    options: [
      "It is deprecated",
      "Not available in arrow functions",
      "Slower than rest",
      "All of the above"
    ],
    answer: 3,
    relevantTags: ["arguments"]
  },
  {
    id: "js-json-22",
    question: "What cannot be serialized using JSON.stringify?",
    options: ["Date", "Function", "Object", "Array"],
    answer: 1,
    relevantTags: ["json"]
  },
  {
    id: "js-freeze-23",
    question: "What does Object.freeze do?",
    options: [
      "Deep freezes object",
      "Prevents adding/removing/modifying properties",
      "Makes object immutable deeply",
      "Throws on mutation"
    ],
    answer: 1,
    relevantTags: ["immutability"]
  },
  {
    id: "js-debounce-24",
    question: "What problem does debounce solve?",
    options: [
      "Memory leaks",
      "Too many rapid function calls",
      "Promise chaining",
      "Event bubbling"
    ],
    answer: 1,
    relevantTags: ["performance"]
  },
  {
    id: "js-throttle-25",
    question: "Key difference between throttle and debounce?",
    options: [
      "Throttle delays execution",
      "Debounce limits frequency",
      "Throttle limits execution rate",
      "No difference"
    ],
    answer: 2,
    relevantTags: ["performance"]
  },
  {
    id: "js-prototype-26",
    question: "Where does JS look for a property first?",
    options: [
      "Prototype",
      "Global object",
      "Object itself",
      "Call stack"
    ],
    answer: 2,
    relevantTags: ["prototype"]
  },
  {
    id: "js-instanceof-27",
    question: "What does instanceof check?",
    options: [
      "Type equality",
      "Prototype chain",
      "Constructor name",
      "Object shape"
    ],
    answer: 1,
    relevantTags: ["instanceof"]
  },
  {
    id: "js-strict-28",
    question: "What does 'use strict' prevent?",
    options: [
      "Implicit globals",
      "Arrow functions",
      "Closures",
      "Async/await"
    ],
    answer: 0,
    relevantTags: ["strict-mode"]
  },
  {
    id: "js-call-apply-bind-29",
    question: "Which one returns a new function?",
    options: ["call", "apply", "bind", "all"],
    answer: 2,
    relevantTags: ["this"]
  },
  {
    id: "js-shadowing-30",
    question: "What is variable shadowing?",
    options: [
      "Overwriting global variables",
      "Declaring same variable in inner scope",
      "Hoisting behavior",
      "Garbage collection"
    ],
    answer: 1,
    relevantTags: ["scope"]
  }
]
