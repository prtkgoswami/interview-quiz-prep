import { Question } from "@/types/question";

export const Questions: Question[] = [
  {
    id: "node-event-loop-01",
    question: "What is Node.js primarily designed for?",
    options: [
      "CPU-intensive tasks",
      "Blocking I/O operations",
      "Event-driven, non-blocking I/O",
      "Multi-threaded execution"
    ],
    answer: 2,
    relevantTags: ["event-loop"]
  },
  {
    id: "node-single-thread-02",
    question: "What does 'single-threaded' mean in Node.js?",
    options: [
      "Only one user at a time",
      "Only one JavaScript execution thread",
      "No concurrency",
      "Only synchronous code"
    ],
    answer: 1,
    relevantTags: ["architecture"]
  },
  {
    id: "node-settimeout-03",
    question: "What is the output order?",
    relatedCode:
      "setTimeout(() => console.log('A'), 0);\nsetImmediate(() => console.log('B'));\nprocess.nextTick(() => console.log('C'));\nconsole.log('D');",
    options: [
      "D C A B",
      "D A B C",
      "C D A B",
      "D B A C"
    ],
    answer: 0,
    relevantTags: ["event-loop"]
  },
  {
    id: "node-nexttick-04",
    question: "Why can excessive `process.nextTick` usage be dangerous?",
    options: [
      "It blocks the OS thread",
      "It can starve the event loop",
      "It throws errors",
      "It slows garbage collection"
    ],
    answer: 1,
    relevantTags: ["event-loop"]
  },
  {
    id: "node-blocking-05",
    question: "Which operation blocks the event loop?",
    options: [
      "fs.readFile",
      "setTimeout",
      "JSON.parse on a huge object",
      "Promise.then"
    ],
    answer: 2,
    relevantTags: ["performance"]
  },
  {
    id: "node-cluster-06",
    question: "Why is the `cluster` module used?",
    options: [
      "Enable async/await",
      "Use multiple CPU cores",
      "Handle memory leaks",
      "Improve file I/O"
    ],
    answer: 1,
    relevantTags: ["scaling"]
  },
  {
    id: "node-worker-threads-07",
    question: "When should Worker Threads be used?",
    options: [
      "For I/O-bound tasks",
      "For CPU-intensive tasks",
      "For routing requests",
      "For event handling"
    ],
    answer: 1,
    relevantTags: ["worker-threads"]
  },
  {
    id: "node-require-cache-08",
    question: "What happens when a module is required multiple times?",
    options: [
      "It is re-executed every time",
      "It is cached and reused",
      "It throws an error",
      "It creates a new instance"
    ],
    answer: 1,
    relevantTags: ["modules"]
  },
  {
    id: "node-commonjs-esm-09",
    question: "Which statement about CommonJS is TRUE?",
    options: [
      "Uses static imports",
      "Uses require and module.exports",
      "Runs in browser",
      "Tree-shakable by default"
    ],
    answer: 1,
    relevantTags: ["modules"]
  },
  {
    id: "node-unhandled-rejection-10",
    question: "What happens on an unhandled promise rejection (Node 18+)?",
    options: [
      "It is silently ignored",
      "Process exits by default",
      "It logs a warning only",
      "It retries automatically"
    ],
    answer: 1,
    relevantTags: ["promises"]
  },
  {
    id: "node-process-env-11",
    question: "Why should `process.env` values be treated as strings?",
    options: [
      "They are JSON",
      "They are always strings",
      "They are parsed automatically",
      "They are immutable"
    ],
    answer: 1,
    relevantTags: ["environment"]
  },
  {
    id: "node-streams-12",
    question: "What is a key benefit of streams?",
    options: [
      "Faster CPU",
      "Lower memory usage",
      "Automatic retries",
      "Simpler syntax"
    ],
    answer: 1,
    relevantTags: ["streams"]
  },
  {
    id: "node-buffer-13",
    question: "What is a Buffer used for?",
    options: [
      "DOM manipulation",
      "Binary data handling",
      "Event scheduling",
      "Async execution"
    ],
    answer: 1,
    relevantTags: ["buffer"]
  },
  {
    id: "node-fs-sync-14",
    question: "Why should fs.*Sync methods be avoided?",
    options: [
      "They are deprecated",
      "They block the event loop",
      "They are slower",
      "They are unsafe"
    ],
    answer: 1,
    relevantTags: ["fs", "performance"]
  },
  {
    id: "node-http-server-15",
    question: "What module is used to create a basic HTTP server?",
    options: ["net", "http", "fs", "stream"],
    answer: 1,
    relevantTags: ["http"]
  },
  {
    id: "node-memory-leak-16",
    question: "Which can cause memory leaks in Node.js?",
    options: [
      "Uncleared timers",
      "Large local variables",
      "Using async/await",
      "Using streams"
    ],
    answer: 0,
    relevantTags: ["memory"]
  },
  {
    id: "node-gc-17",
    question: "Who manages garbage collection in Node.js?",
    options: [
      "Node runtime",
      "JavaScript engine (V8)",
      "Operating system",
      "Developer manually"
    ],
    answer: 1,
    relevantTags: ["garbage-collection"]
  },
  {
    id: "node-callback-hell-18",
    question: "What problem do Promises solve?",
    options: [
      "Memory leaks",
      "Callback hell",
      "Blocking I/O",
      "Threading"
    ],
    answer: 1,
    relevantTags: ["promises"]
  },
  {
    id: "node-backpressure-19",
    question: "What is backpressure?",
    options: [
      "Network congestion",
      "Too many callbacks",
      "Readable stream producing data faster than writable consumes",
      "Blocking I/O"
    ],
    answer: 2,
    relevantTags: ["streams"]
  },
  {
    id: "node-exit-20",
    question: "What does `process.exit()` do?",
    options: [
      "Gracefully shuts down server",
      "Immediately terminates process",
      "Flushes event loop",
      "Closes HTTP connections"
    ],
    answer: 1,
    relevantTags: ["process"]
  },
  {
    id: "node-signal-21",
    question: "Why listen for SIGTERM?",
    options: [
      "Handle uncaught exceptions",
      "Graceful shutdown",
      "Restart process",
      "Enable clustering"
    ],
    answer: 1,
    relevantTags: ["process"]
  },
  {
    id: "node-event-emitter-22",
    question: "What happens if an 'error' event is emitted without a listener?",
    options: [
      "Ignored",
      "Process crashes",
      "Warning logged",
      "Promise rejected"
    ],
    answer: 1,
    relevantTags: ["events"]
  },
  {
    id: "node-async-stack-23",
    question: "What problem do async stack traces solve?",
    options: [
      "Memory leaks",
      "Hard-to-debug async errors",
      "Performance issues",
      "Thread safety"
    ],
    answer: 1,
    relevantTags: ["debugging"]
  },
  {
    id: "node-libuv-24",
    question: "What is libuv responsible for?",
    options: [
      "Garbage collection",
      "Event loop and async I/O",
      "JS parsing",
      "HTTP routing"
    ],
    answer: 1,
    relevantTags: ["internals"]
  },
  {
    id: "node-repl-25",
    question: "What is Node REPL mainly used for?",
    options: [
      "Production debugging",
      "Interactive experimentation",
      "Running scripts",
      "Testing performance"
    ],
    answer: 1,
    relevantTags: ["repl"]
  },
  {
    id: "node-npm-lock-26",
    question: "Why is package-lock.json important?",
    options: [
      "Faster builds",
      "Deterministic dependency versions",
      "Smaller bundles",
      "Security scanning"
    ],
    answer: 1,
    relevantTags: ["npm"]
  },
  {
    id: "node-process-argv-27",
    question: "What does `process.argv` contain?",
    options: [
      "Environment variables",
      "Command-line arguments",
      "System info",
      "User input"
    ],
    answer: 1,
    relevantTags: ["process"]
  },
  {
    id: "node-handle-exception-28",
    question: "Best way to handle uncaught exceptions?",
    options: [
      "Ignore them",
      "Try/catch globally",
      "Log and restart process",
      "Throw again"
    ],
    answer: 2,
    relevantTags: ["error-handling"]
  },
  {
    id: "node-promise-all-29",
    question: "What happens if one promise fails in Promise.all?",
    options: [
      "Others continue",
      "All results returned",
      "Promise.all rejects immediately",
      "Retries automatically"
    ],
    answer: 2,
    relevantTags: ["promises"]
  },
  {
    id: "node-cpu-bound-30",
    question: "Best way to handle CPU-heavy tasks in Node?",
    options: [
      "Async/await",
      "Worker threads",
      "Promises",
      "EventEmitter"
    ],
    answer: 1,
    relevantTags: ["performance"]
  }
]
