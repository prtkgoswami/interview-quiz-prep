import { Question } from "@/types/question";

export const Questions: Question[] = [
  {
    id: "react-render-01",
    question: "What causes a React component to re-render?",
    options: [
      "Calling a function inside the component",
      "State or props change",
      "DOM mutation",
      "Console.log"
    ],
    answer: 1,
    relevantTags: ["rendering"]
  },
  {
    id: "react-key-02",
    question: "Why are keys important in lists?",
    options: [
      "Improve styling",
      "Help React identify elements during reconciliation",
      "Prevent re-renders",
      "Required by JSX"
    ],
    answer: 1,
    relevantTags: ["reconciliation", "keys"]
  },
  {
    id: "react-index-key-03",
    question: "Why is using array index as key discouraged?",
    options: [
      "Performance issues",
      "Incorrect UI updates on reordering",
      "Syntax error",
      "Memory leaks"
    ],
    answer: 1,
    relevantTags: ["keys"]
  },
  {
    id: "react-state-async-04",
    question: "Why is setState considered asynchronous?",
    options: [
      "It returns a Promise",
      "React batches state updates",
      "JavaScript is async",
      "State updates run in useEffect"
    ],
    answer: 1,
    relevantTags: ["state"]
  },
  {
    id: "react-state-prev-05",
    question: "Why should you use functional updates with state?",
    relatedCode:
      "setCount(count + 1);\nsetCount(count + 1);",
    options: [
      "Improves readability",
      "Avoids stale state",
      "Faster rendering",
      "Prevents re-renders"
    ],
    answer: 1,
    relevantTags: ["state"]
  },
  {
    id: "react-useeffect-06",
    question: "When does useEffect with empty dependency array run?",
    options: [
      "On every render",
      "Only on mount",
      "On mount and unmount",
      "After every state update"
    ],
    answer: 1,
    relevantTags: ["useEffect"]
  },
  {
    id: "react-useeffect-cleanup-07",
    question: "When does a cleanup function in useEffect run?",
    options: [
      "Before next effect or on unmount",
      "Only on mount",
      "After render",
      "Only on state change"
    ],
    answer: 0,
    relevantTags: ["useEffect"]
  },
  {
    id: "react-effect-deps-08",
    question: "What is a common bug caused by missing dependencies in useEffect?",
    options: [
      "Infinite loop",
      "Stale closures",
      "Memory leaks",
      "Syntax error"
    ],
    answer: 1,
    relevantTags: ["useEffect"]
  },
  {
    id: "react-closure-09",
    question: "Why does this log stale value?",
    relatedCode:
      "useEffect(() => {\n  setTimeout(() => console.log(count), 1000);\n}, []);",
    options: [
      "setTimeout is async",
      "count is captured in closure",
      "useEffect runs twice",
      "React batches logs"
    ],
    answer: 1,
    relevantTags: ["closures", "useEffect"]
  },
  {
    id: "react-useref-10",
    question: "What is useRef commonly used for?",
    options: [
      "Trigger re-renders",
      "Store mutable values without re-render",
      "Replace useState",
      "Memoize values"
    ],
    answer: 1,
    relevantTags: ["useRef"]
  },
  {
    id: "react-useref-vs-state-11",
    question: "Why doesn't updating useRef cause a re-render?",
    options: [
      "React ignores it",
      "Refs are mutable containers",
      "Refs are async",
      "Refs are frozen"
    ],
    answer: 1,
    relevantTags: ["useRef"]
  },
  {
    id: "react-usememo-12",
    question: "What problem does useMemo solve?",
    options: [
      "Prevent re-render",
      "Memoize expensive calculations",
      "Cache API calls",
      "Replace useEffect"
    ],
    answer: 1,
    relevantTags: ["useMemo"]
  },
  {
    id: "react-usecallback-13",
    question: "When is useCallback useful?",
    options: [
      "Always",
      "When passing callbacks to memoized children",
      "For side effects",
      "For state updates"
    ],
    answer: 1,
    relevantTags: ["useCallback"]
  },
  {
    id: "react-memo-14",
    question: "What does React.memo do?",
    options: [
      "Memoizes state",
      "Prevents re-render if props are shallow equal",
      "Caches DOM",
      "Freezes component"
    ],
    answer: 1,
    relevantTags: ["memo"]
  },
  {
    id: "react-context-15",
    question: "What is a downside of excessive Context usage?",
    options: [
      "Syntax errors",
      "Unnecessary re-renders",
      "Memory leaks",
      "Slow builds"
    ],
    answer: 1,
    relevantTags: ["context"]
  },
  {
    id: "react-controlled-16",
    question: "What defines a controlled component?",
    options: [
      "Uses refs",
      "Form value controlled by React state",
      "Uses defaultValue",
      "Uses uncontrolled input"
    ],
    answer: 1,
    relevantTags: ["forms"]
  },
  {
    id: "react-uncontrolled-17",
    question: "When are uncontrolled components preferred?",
    options: [
      "Complex validation",
      "Simple forms or legacy code",
      "Dynamic forms",
      "Real-time validation"
    ],
    answer: 1,
    relevantTags: ["forms"]
  },
  {
    id: "react-fragment-18",
    question: "Why use React.Fragment?",
    options: [
      "Improve performance",
      "Avoid extra DOM nodes",
      "Group state",
      "Enable hooks"
    ],
    answer: 1,
    relevantTags: ["jsx"]
  },
  {
    id: "react-strictmode-19",
    question: "Why does React StrictMode double-invoke certain functions in dev?",
    options: [
      "Bug",
      "Performance optimization",
      "Detect side effects",
      "Concurrent rendering"
    ],
    answer: 2,
    relevantTags: ["strict-mode"]
  },
  {
    id: "react-batching-20",
    question: "What is state batching?",
    options: [
      "Async rendering",
      "Combining multiple state updates into one render",
      "Debouncing state",
      "Lazy loading state"
    ],
    answer: 1,
    relevantTags: ["performance"]
  },
  {
    id: "react-lazy-21",
    question: "What does React.lazy enable?",
    options: [
      "Code splitting",
      "State memoization",
      "Lazy state updates",
      "Deferred rendering"
    ],
    answer: 0,
    relevantTags: ["performance"]
  },
  {
    id: "react-suspense-22",
    question: "What is Suspense primarily used for?",
    options: [
      "Error handling",
      "Data fetching",
      "Loading states for async boundaries",
      "State management"
    ],
    answer: 2,
    relevantTags: ["suspense"]
  },
  {
    id: "react-error-boundary-23",
    question: "What can Error Boundaries catch?",
    options: [
      "Event handler errors",
      "Async errors",
      "Render-time errors in children",
      "Promise rejections"
    ],
    answer: 2,
    relevantTags: ["error-boundary"]
  },
  {
    id: "react-portal-24",
    question: "Why use React Portals?",
    options: [
      "Performance",
      "Render outside parent DOM hierarchy",
      "State isolation",
      "Lazy loading"
    ],
    answer: 1,
    relevantTags: ["portals"]
  },
  {
    id: "react-reconciliation-25",
    question: "What does React reconciliation do?",
    options: [
      "Sync DOM",
      "Diff virtual DOM and update real DOM",
      "Garbage collect components",
      "Optimize hooks"
    ],
    answer: 1,
    relevantTags: ["reconciliation"]
  },
  {
    id: "react-immutable-26",
    question: "Why should state be treated as immutable?",
    options: [
      "Syntax requirement",
      "Enable change detection",
      "Reduce memory",
      "Avoid crashes"
    ],
    answer: 1,
    relevantTags: ["state"]
  },
  {
    id: "react-conditional-render-27",
    question: "What is the correct way to conditionally render JSX?",
    options: [
      "if inside JSX",
      "Ternary or &&",
      "switch statement",
      "try/catch"
    ],
    answer: 1,
    relevantTags: ["jsx"]
  },
  {
    id: "react-props-drilling-28",
    question: "What is props drilling?",
    options: [
      "Passing props through many layers",
      "Mutating props",
      "Using refs",
      "Passing callbacks"
    ],
    answer: 0,
    relevantTags: ["props"]
  },
  {
    id: "react-derive-state-29",
    question: "Why is deriving state from props discouraged?",
    options: [
      "Slower renders",
      "Leads to duplicated source of truth",
      "Syntax error",
      "Hooks restriction"
    ],
    answer: 1,
    relevantTags: ["state"]
  },
  {
    id: "react-effect-loop-30",
    question: "What causes an infinite loop in useEffect?",
    options: [
      "Missing cleanup",
      "Updating state inside effect without proper deps",
      "Using async functions",
      "Multiple effects"
    ],
    answer: 1,
    relevantTags: ["useEffect"]
  }
]
