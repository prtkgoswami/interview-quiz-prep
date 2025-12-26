import { Question } from "@/types/question";

export const Questions: Question[] = [
  {
    id: "ts-any-vs-unknown-01",
    question: "What is the key difference between `any` and `unknown`?",
    options: [
      "`unknown` is deprecated",
      "`any` disables type checking, `unknown` requires narrowing",
      "`unknown` allows all operations",
      "`any` is safer than `unknown`"
    ],
    answer: 1,
    relevantTags: ["any", "unknown"]
  },
  {
    id: "ts-never-02",
    question: "When is the `never` type used?",
    options: [
      "When a function returns null",
      "When a function never returns",
      "When a value is undefined",
      "When an error is optional"
    ],
    answer: 1,
    relevantTags: ["never"]
  },
  {
    id: "ts-type-vs-interface-03",
    question: "Which statement about `type` vs `interface` is TRUE?",
    options: [
      "Interfaces can be extended, types cannot",
      "Types support declaration merging",
      "Interfaces support declaration merging",
      "Types are slower at runtime"
    ],
    answer: 2,
    relevantTags: ["type", "interface"]
  },
  {
    id: "ts-structural-typing-04",
    question: "Why does this assignment compile successfully?",
    relatedCode:
      "interface A { x: number }\ninterface B { x: number }\nlet a: A = { x: 1 };\nlet b: B = a;",
    options: [
      "Because TypeScript is nominally typed",
      "Because of structural typing",
      "Because interfaces are erased",
      "Because of type inference"
    ],
    answer: 1,
    relevantTags: ["structural-typing"]
  },
  {
    id: "ts-readonly-05",
    question: "What does `readonly` prevent?",
    options: [
      "Object mutation",
      "Property reassignment",
      "Deep mutation",
      "Runtime changes"
    ],
    answer: 1,
    relevantTags: ["readonly"]
  },
  {
    id: "ts-optional-vs-undefined-06",
    question: "What is the difference between `prop?: string` and `prop: string | undefined`?",
    options: [
      "No difference",
      "Optional may be omitted, union must exist",
      "Union is safer",
      "Optional is deprecated"
    ],
    answer: 1,
    relevantTags: ["optional"]
  },
  {
    id: "ts-function-variance-07",
    question: "Why is this assignment allowed?",
    relatedCode:
      "type Fn = (x: number) => void;\nconst f: Fn = (x: number | string) => {};",
    options: [
      "Because return types are covariant",
      "Because function parameters are bivariant in TS",
      "Because of structural typing",
      "Because of union widening"
    ],
    answer: 1,
    relevantTags: ["functions", "variance"]
  },
  {
    id: "ts-generic-constraint-08",
    question: "Why does this code error?",
    relatedCode:
      "function logLength<T>(value: T) {\n  console.log(value.length);\n}",
    options: [
      "Generics cannot access properties",
      "T is not constrained",
      "length is private",
      "Type inference failed"
    ],
    answer: 1,
    relevantTags: ["generics"]
  },
  {
    id: "ts-extends-constraint-09",
    question: "How do you fix the previous error?",
    options: [
      "`<T extends any>`",
      "`<T extends { length: number }>`",
      "`<T extends unknown>`",
      "`<T extends object>`"
    ],
    answer: 1,
    relevantTags: ["generics"]
  },
  {
    id: "ts-type-assertion-10",
    question: "What does a type assertion do?",
    options: [
      "Performs runtime validation",
      "Changes runtime value",
      "Tells the compiler to trust you",
      "Converts types"
    ],
    answer: 2,
    relevantTags: ["type-assertion"]
  },
  {
    id: "ts-narrowing-11",
    question: "Which narrows a union type?",
    options: [
      "Type assertion",
      "typeof check",
      "as keyword",
      "Casting"
    ],
    answer: 1,
    relevantTags: ["type-narrowing"]
  },
  {
    id: "ts-enum-12",
    question: "What is a downside of numeric enums?",
    options: [
      "Cannot be iterated",
      "Generate reverse mappings",
      "Not supported in JS",
      "Too slow"
    ],
    answer: 1,
    relevantTags: ["enum"]
  },
  {
    id: "ts-const-assertion-13",
    question: "What does `as const` do?",
    options: [
      "Makes values immutable at runtime",
      "Prevents reassignment",
      "Narrows literal types",
      "Freezes objects deeply"
    ],
    answer: 2,
    relevantTags: ["const-assertion"]
  },
  {
    id: "ts-discriminated-union-14",
    question: "What enables exhaustive checks in discriminated unions?",
    options: [
      "Union types",
      "Common literal property",
      "Enums",
      "Interfaces"
    ],
    answer: 1,
    relevantTags: ["discriminated-union"]
  },
  {
    id: "ts-never-exhaustive-15",
    question: "Why is `never` useful in exhaustive checks?",
    options: [
      "It disables compilation",
      "It ensures all cases are handled",
      "It improves performance",
      "It removes unreachable code"
    ],
    answer: 1,
    relevantTags: ["never"]
  },
  {
    id: "ts-index-signature-16",
    question: "What does an index signature allow?",
    options: [
      "Fixed property names",
      "Dynamic property access",
      "Private properties",
      "Readonly properties"
    ],
    answer: 1,
    relevantTags: ["index-signature"]
  },
  {
    id: "ts-utility-partial-17",
    question: "What does `Partial<T>` do?",
    options: [
      "Makes all properties readonly",
      "Makes all properties optional",
      "Removes undefined",
      "Creates deep copy"
    ],
    answer: 1,
    relevantTags: ["utility-types"]
  },
  {
    id: "ts-utility-required-18",
    question: "What does `Required<T>` do?",
    options: [
      "Removes optional modifiers",
      "Adds runtime validation",
      "Freezes object",
      "Ensures deep required"
    ],
    answer: 0,
    relevantTags: ["utility-types"]
  },
  {
    id: "ts-utility-pick-19",
    question: "What does `Pick<T, K>` do?",
    options: [
      "Removes keys",
      "Selects subset of properties",
      "Makes properties optional",
      "Renames keys"
    ],
    answer: 1,
    relevantTags: ["utility-types"]
  },
  {
    id: "ts-utility-omit-20",
    question: "What does `Omit<T, K>` do?",
    options: [
      "Adds keys",
      "Removes keys",
      "Renames keys",
      "Makes keys optional"
    ],
    answer: 1,
    relevantTags: ["utility-types"]
  },
  {
    id: "ts-null-checks-21",
    question: "What does `strictNullChecks` enforce?",
    options: [
      "No null allowed anywhere",
      "Explicit handling of null and undefined",
      "Runtime null checks",
      "No optional properties"
    ],
    answer: 1,
    relevantTags: ["strict"]
  },
  {
    id: "ts-non-null-assertion-22",
    question: "What does the `!` operator do?",
    options: [
      "Negates boolean",
      "Removes undefined from type",
      "Checks null at runtime",
      "Throws error if null"
    ],
    answer: 1,
    relevantTags: ["non-null-assertion"]
  },
  {
    id: "ts-unknown-narrow-23",
    question: "How do you safely use an `unknown` value?",
    options: [
      "Cast to any",
      "Type guard or narrowing",
      "Ignore compiler",
      "Use non-null assertion"
    ],
    answer: 1,
    relevantTags: ["unknown"]
  },
  {
    id: "ts-generic-default-24",
    question: "What are default generic types used for?",
    options: [
      "Performance optimization",
      "Optional generic parameters",
      "Runtime defaults",
      "Overloading functions"
    ],
    answer: 1,
    relevantTags: ["generics"]
  },
  {
    id: "ts-conditional-types-25",
    question: "What are conditional types?",
    options: [
      "Runtime conditionals",
      "Type-level if-else logic",
      "Generics replacement",
      "Union filters"
    ],
    answer: 1,
    relevantTags: ["conditional-types"]
  },
  {
    id: "ts-infer-26",
    question: "What does `infer` keyword do?",
    options: [
      "Infers runtime values",
      "Extracts types within conditional types",
      "Creates generics",
      "Narrows unions"
    ],
    answer: 1,
    relevantTags: ["infer"]
  },
  {
    id: "ts-keyof-27",
    question: "What does `keyof T` produce?",
    options: [
      "Values of T",
      "Union of property names",
      "Runtime keys",
      "Array of keys"
    ],
    answer: 1,
    relevantTags: ["keyof"]
  },
  {
    id: "ts-record-28",
    question: "What does `Record<K, T>` create?",
    options: [
      "Tuple",
      "Object type with keys K and values T",
      "Map",
      "Interface"
    ],
    answer: 1,
    relevantTags: ["record"]
  },
  {
    id: "ts-declaration-merging-29",
    question: "Which supports declaration merging?",
    options: ["type", "interface", "enum", "class"],
    answer: 1,
    relevantTags: ["declaration-merging"]
  },
  {
    id: "ts-runtime-30",
    question: "Which TypeScript feature exists ONLY at compile time?",
    options: [
      "Enums",
      "Interfaces",
      "Classes",
      "Namespaces"
    ],
    answer: 1,
    relevantTags: ["compile-time"]
  }
]
