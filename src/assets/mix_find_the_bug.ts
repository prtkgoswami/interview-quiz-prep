export const Questions = [
  {
    id: "bug-js-closure-01",
    question: "What is the bug in this code?",
    relatedCode:
      "for (var i = 0; i < 3; i++) {\n  setTimeout(() => {\n    console.log(i);\n  }, 1000);\n}",
    options: [
      "setTimeout is async",
      "var is function-scoped causing shared i",
      "Arrow functions cannot access i",
      "Console.log is delayed"
    ],
    answer: 1,
    relevantTags: ["javascript", "closures"]
  },
  {
    id: "bug-js-equality-02",
    question: "Why is this condition unexpected?",
    relatedCode:
      "if ([] == ![]) {\n  console.log('true');\n}",
    options: [
      "Array comparison is random",
      "Loose equality causes type coercion",
      "Boolean comparison is invalid",
      "Arrays are truthy"
    ],
    answer: 1,
    relevantTags: ["javascript", "coercion"]
  },
  {
    id: "bug-js-map-03",
    question: "What is wrong with this usage?",
    relatedCode:
      "[1, 2, 3].map(parseInt);",
    options: [
      "parseInt expects string only",
      "map passes index as second argument",
      "parseInt is async",
      "map mutates array"
    ],
    answer: 1,
    relevantTags: ["javascript", "arrays"]
  },
  {
    id: "bug-react-state-04",
    question: "What is the bug in this state update?",
    relatedCode:
      "setCount(count + 1);\nsetCount(count + 1);",
    options: [
      "setCount is async",
      "Second update overrides first",
      "State is immutable",
      "Batching skips updates"
    ],
    answer: 1,
    relevantTags: ["react", "state"]
  },
  {
    id: "bug-react-effect-05",
    question: "Why does this log a stale value?",
    relatedCode:
      "useEffect(() => {\n  setTimeout(() => {\n    console.log(count);\n  }, 1000);\n}, []);",
    options: [
      "useEffect runs only once",
      "count is captured in closure",
      "setTimeout blocks render",
      "React skips updates"
    ],
    answer: 1,
    relevantTags: ["react", "useEffect", "closures"]
  },
  {
    id: "bug-react-deps-06",
    question: "What is the problem here?",
    relatedCode:
      "useEffect(() => {\n  fetchData();\n}, []);",
    options: [
      "fetchData should be async",
      "Missing dependency can cause stale logic",
      "useEffect should return cleanup",
      "Empty dependency array is invalid"
    ],
    answer: 1,
    relevantTags: ["react", "useEffect"]
  },
  {
    id: "bug-react-memo-07",
    question: "Why might this component still re-render?",
    relatedCode:
      "const Child = React.memo(({ onClick }) => {\n  return <button onClick={onClick}>Click</button>;\n});",
    options: [
      "React.memo is deprecated",
      "Functions are re-created on each render",
      "Props are mutable",
      "Buttons cannot be memoized"
    ],
    answer: 1,
    relevantTags: ["react", "memo"]
  },
  {
    id: "bug-react-key-08",
    question: "What is the issue with this list rendering?",
    relatedCode:
      "items.map((item, index) => (\n  <Item key={index} value={item} />\n))",
    options: [
      "index is slow",
      "Keys must be strings",
      "Index as key breaks reconciliation on reorder",
      "map should return null"
    ],
    answer: 2,
    relevantTags: ["react", "keys"]
  },
  {
    id: "bug-react-controlled-09",
    question: "Why is this input behaving inconsistently?",
    relatedCode:
      "<input value={value} onChange={e => setValue(e.target.value)} defaultValue=\"test\" />",
    options: [
      "defaultValue overrides value",
      "Input switches between controlled and uncontrolled",
      "onChange is incorrect",
      "value must be optional"
    ],
    answer: 1,
    relevantTags: ["react", "forms"]
  },
  {
    id: "bug-next-window-10",
    question: "Why does this code fail in Next.js App Router?",
    relatedCode:
      "console.log(window.location.href);",
    options: [
      "window is deprecated",
      "Server Components run on the server",
      "Hydration mismatch",
      "StrictMode issue"
    ],
    answer: 1,
    relevantTags: ["nextjs", "server-components"]
  },
  {
    id: "bug-next-client-11",
    question: "What is missing here?",
    relatedCode:
      "useState(0);",
    options: [
      "import React",
      "'use client' directive",
      "useEffect",
      "useMemo"
    ],
    answer: 1,
    relevantTags: ["nextjs", "client-components"]
  },
  {
    id: "bug-next-hydration-12",
    question: "What causes this hydration issue?",
    relatedCode:
      "const time = Date.now();\nreturn <div>{time}</div>;",
    options: [
      "Date.now is async",
      "Different server and client render output",
      "JS execution order",
      "React batching"
    ],
    answer: 1,
    relevantTags: ["nextjs", "hydration"]
  },
  {
    id: "bug-next-fetch-13",
    question: "Why might this data appear stale?",
    relatedCode:
      "await fetch('/api/data');",
    options: [
      "Fetch is cached by default in Server Components",
      "API route is broken",
      "useEffect missing",
      "Client cache issue"
    ],
    answer: 0,
    relevantTags: ["nextjs", "fetch", "caching"]
  },
  {
    id: "bug-next-effect-14",
    question: "Why does this cause an infinite loop?",
    relatedCode:
      "useEffect(() => {\n  setCount(count + 1);\n}, [count]);",
    options: [
      "useEffect cannot update state",
      "Dependency causes re-trigger on each update",
      "setCount is async",
      "React batching bug"
    ],
    answer: 1,
    relevantTags: ["react", "useEffect"]
  },
  {
    id: "bug-js-this-15",
    question: "Why does this log undefined?",
    relatedCode:
      "const obj = {\n  value: 10,\n  getValue: () => this.value\n};\nconsole.log(obj.getValue());",
    options: [
      "this is bound incorrectly in arrow functions",
      "value is private",
      "Object methods need bind",
      "Arrow functions are async"
    ],
    answer: 0,
    relevantTags: ["javascript", "this"]
  },
  {
    id: "bug-react-context-16",
    question: "What performance issue can this cause?",
    relatedCode:
      "<Context.Provider value={{ count }}>\n  <Child />\n</Context.Provider>",
    options: [
      "Context doesn't update",
      "New object causes re-renders",
      "Context is deprecated",
      "Child cannot access value"
    ],
    answer: 1,
    relevantTags: ["react", "context"]
  },
  {
    id: "bug-next-layout-17",
    question: "Why does this layout remount on navigation?",
    relatedCode:
      "export default function Layout({ children }) {\n  return <div>{children}</div>;\n}",
    options: [
      "Layouts always remount",
      "Layout is client component unnecessarily",
      "Missing key",
      "App Router bug"
    ],
    answer: 1,
    relevantTags: ["nextjs", "layout"]
  },
  {
    id: "bug-js-promise-18",
    question: "What is the issue here?",
    relatedCode:
      "try {\n  Promise.reject('error');\n} catch (e) {\n  console.log(e);\n}",
    options: [
      "Promise.reject is async and not caught",
      "try/catch is invalid",
      "Promises cannot reject strings",
      "Error is swallowed"
    ],
    answer: 0,
    relevantTags: ["javascript", "promises"]
  },
  {
    id: "bug-react-effect-cleanup-19",
    question: "What bug can occur here?",
    relatedCode:
      "useEffect(() => {\n  window.addEventListener('resize', handler);\n}, []);",
    options: [
      "handler is undefined",
      "Missing cleanup causes memory leak",
      "useEffect must be async",
      "resize event is deprecated"
    ],
    answer: 1,
    relevantTags: ["react", "useEffect"]
  },
  {
    id: "bug-next-env-20",
    question: "Why is this undefined in the browser?",
    relatedCode:
      "console.log(process.env.API_KEY);",
    options: [
      "Env vars are server-only",
      "process is undefined",
      "Build error",
      "Needs dotenv"
    ],
    answer: 0,
    relevantTags: ["nextjs", "env"]
  }
]
