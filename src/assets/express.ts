import { Question } from "@/types/question";

export const Questions: Question[] = [
  {
    id: "express-mw-order-01",
    question: "What is the execution order of middleware in Express?",
    options: [
      "Based on alphabetical order of files",
      "Based on order of definition in code",
      "Based on HTTP method priority",
      "Random, depends on Node event loop"
    ],
    answer: 1,
    relevantTags: ["middleware", "execution-order"]
  },
  {
    id: "express-next-missing-02",
    question: "What is the bug in the following code?",
    relatedCode: "app.use((req, res) => {\n  console.log('Request received');\n});",
    options: [
      "res.send() is missing",
      "next() is never called",
      "Middleware must be async",
      "console.log blocks the event loop"
    ],
    answer: 1,
    relevantTags: ["middleware", "next"]
  },
  {
    id: "express-async-error-03",
    question: "Why will this error NOT be caught by Express error middleware?",
    relatedCode: "app.get('/test', async (req, res) => {\n  throw new Error('Boom');\n});",
    options: [
      "Async handlers are not supported",
      "Thrown errors in async handlers are swallowed unless wrapped",
      "Express only catches sync errors",
      "It WILL be caught correctly"
    ],
    answer: 3,
    relevantTags: ["async", "error-handling"]
  },
  {
    id: "express-multiple-res-04",
    question: "What is the issue with this route handler?",
    relatedCode: "app.get('/user', (req, res) => {\n  res.send('User');\n  res.status(200).json({ ok: true });\n});",
    options: [
      "status() must be called before send()",
      "Multiple responses are being sent",
      "json() cannot be used in GET",
      "Express merges both responses"
    ],
    answer: 1,
    relevantTags: ["responses", "bugs"]
  },
  {
    id: "express-return-res-05",
    question: "Why is `return res.status(...).send(...)` commonly used?",
    options: [
      "To improve performance",
      "To stop further execution of the handler",
      "To satisfy TypeScript",
      "To flush the response buffer"
    ],
    answer: 1,
    relevantTags: ["best-practices"]
  },
  {
    id: "express-error-mw-06",
    question: "Which signature defines an Express error-handling middleware?",
    options: [
      "(req, res, next)",
      "(err, req, res, next)",
      "(error, req, res)",
      "(req, err, res, next)"
    ],
    answer: 1,
    relevantTags: ["error-handling"]
  },
  {
    id: "express-mw-skip-07",
    question: "How do you skip to the next route handler in middleware?",
    options: [
      "next()",
      "return",
      "next('route')",
      "res.end()"
    ],
    answer: 2,
    relevantTags: ["middleware", "routing"]
  },
  {
    id: "express-req-res-08",
    question: "Which object holds parsed route params like `/user/:id`?",
    options: [
      "req.query",
      "req.params",
      "req.body",
      "req.path"
    ],
    answer: 1,
    relevantTags: ["routing"]
  },
  {
    id: "express-body-parser-09",
    question: "Why might `req.body` be undefined?",
    options: [
      "Request method is GET",
      "body-parser middleware is missing",
      "Headers are lowercase",
      "Express does not support request bodies"
    ],
    answer: 1,
    relevantTags: ["body-parser"]
  },
  {
    id: "express-json-limit-10",
    question: "How do you prevent large JSON payload attacks?",
    options: [
      "Disable JSON parsing",
      "Use express.json({ limit })",
      "Use CORS",
      "Validate req.headers"
    ],
    answer: 1,
    relevantTags: ["security"]
  },
  {
    id: "express-async-next-11",
    question: "What is the correct way to forward async errors?",
    options: [
      "throw error",
      "next(error)",
      "res.send(error)",
      "console.error(error)"
    ],
    answer: 1,
    relevantTags: ["async", "error-handling"]
  },
  {
    id: "express-router-12",
    question: "What is a key benefit of using `express.Router()`?",
    options: [
      "Improves request speed",
      "Enables modular route definitions",
      "Automatically handles errors",
      "Adds middleware globally"
    ],
    answer: 1,
    relevantTags: ["router"]
  },
  {
    id: "express-mw-order-bug-13",
    question: "Why will this route never be reached?",
    relatedCode: "app.use((req, res) => {\n  res.send('Blocked');\n});\napp.get('/home', (req, res) => {\n  res.send('Home');\n});",
    options: [
      "GET routes must come first",
      "app.use blocks all routes below it",
      "res.send is async",
      "Express caches responses"
    ],
    answer: 1,
    relevantTags: ["middleware", "routing"]
  },
  {
    id: "express-cors-14",
    question: "What problem does CORS middleware solve?",
    options: [
      "SQL Injection",
      "Cross-origin browser restrictions",
      "CSRF attacks",
      "Rate limiting"
    ],
    answer: 1,
    relevantTags: ["security", "cors"]
  },
  {
    id: "express-status-default-15",
    question: "What HTTP status code does `res.send()` use by default?",
    options: ["200", "201", "204", "500"],
    answer: 0,
    relevantTags: ["responses"]
  },
  {
    id: "express-headers-sent-16",
    question: "What does `ERR_HTTP_HEADERS_SENT` indicate?",
    options: [
      "Invalid headers",
      "Response sent more than once",
      "Headers too large",
      "Missing Content-Type"
    ],
    answer: 1,
    relevantTags: ["errors", "debugging"]
  },
  {
    id: "express-req-flow-17",
    question: "When does Express stop executing middleware?",
    options: [
      "When next() is called",
      "When res is sent",
      "When req ends",
      "When status code is set"
    ],
    answer: 1,
    relevantTags: ["middleware"]
  },
  {
    id: "express-async-mw-18",
    question: "What happens if an async middleware never calls next()?",
    options: [
      "Express retries it",
      "Request hangs",
      "Error middleware runs",
      "Route handler runs anyway"
    ],
    answer: 1,
    relevantTags: ["async", "bugs"]
  },
  {
    id: "express-trust-proxy-19",
    question: "Why is `app.set('trust proxy', true)` needed?",
    options: [
      "Enable HTTPS",
      "Read correct client IP behind proxies",
      "Improve performance",
      "Enable cookies"
    ],
    answer: 1,
    relevantTags: ["deployment"]
  },
  {
    id: "express-req-query-20",
    question: "Where does `/search?q=test` store `q`?",
    options: [
      "req.body",
      "req.params",
      "req.query",
      "req.headers"
    ],
    answer: 2,
    relevantTags: ["routing"]
  },
  {
    id: "express-error-order-21",
    question: "Where should error middleware be defined?",
    options: [
      "Before routes",
      "After all routes",
      "Inside routers only",
      "Anywhere"
    ],
    answer: 1,
    relevantTags: ["error-handling"]
  },
  {
    id: "express-res-end-22",
    question: "What does `res.end()` do?",
    options: [
      "Sets status code",
      "Ends response without body",
      "Sends JSON",
      "Terminates server"
    ],
    answer: 1,
    relevantTags: ["responses"]
  },
  {
    id: "express-memory-leak-23",
    question: "Which pattern can cause memory leaks?",
    options: [
      "Using async/await",
      "Storing req/res in global variables",
      "Using Router",
      "Using res.json"
    ],
    answer: 1,
    relevantTags: ["performance"]
  },
  {
    id: "express-rate-limit-24",
    question: "Why use rate limiting middleware?",
    options: [
      "Reduce latency",
      "Prevent brute-force / DoS attacks",
      "Improve caching",
      "Fix CORS issues"
    ],
    answer: 1,
    relevantTags: ["security"]
  },
  {
    id: "express-404-25",
    question: "How do you handle unmatched routes?",
    options: [
      "Throw error",
      "Define wildcard route at end",
      "Use try/catch",
      "Restart server"
    ],
    answer: 1,
    relevantTags: ["routing"]
  },
  {
    id: "express-send-vs-json-26",
    question: "What is a key difference between res.send and res.json?",
    options: [
      "send cannot send objects",
      "json sets Content-Type to application/json",
      "json is async",
      "send auto stringifies twice"
    ],
    answer: 1,
    relevantTags: ["responses"]
  },
  {
    id: "express-mw-chain-27",
    question: "How are multiple middleware functions executed?",
    options: [
      "Parallel",
      "Sequential in definition order",
      "Based on priority",
      "Random"
    ],
    answer: 1,
    relevantTags: ["middleware"]
  },
  {
    id: "express-helmet-28",
    question: "What does Helmet primarily provide?",
    options: [
      "Authentication",
      "Security headers",
      "Rate limiting",
      "CORS"
    ],
    answer: 1,
    relevantTags: ["security"]
  },
  {
    id: "express-req-timeout-29",
    question: "What happens if a request never sends a response?",
    options: [
      "Express auto times out",
      "Client waits indefinitely",
      "Server crashes",
      "Error middleware runs"
    ],
    answer: 1,
    relevantTags: ["debugging"]
  },
  {
    id: "express-mw-reuse-30",
    question: "Why extract middleware into reusable functions?",
    options: [
      "Improve performance",
      "Improve maintainability and testability",
      "Reduce bundle size",
      "Avoid async bugs"
    ],
    answer: 1,
    relevantTags: ["best-practices"]
  }
]
