export const MOCK_QUESTIONS = [
		{
			"id": "express-req-timeout-29",
			"question": "What happens if a request never sends a response?",
			"options": [
				"Express auto times out",
				"Client waits indefinitely",
				"Server crashes",
				"Error middleware runs"
			],
			"relevantTags": [
				"debugging"
			]
		},
		{
			"id": "express-mw-chain-27",
			"question": "How are multiple middleware functions executed?",
			"options": [
				"Parallel",
				"Sequential in definition order",
				"Based on priority",
				"Random"
			],
			"relevantTags": [
				"middleware"
			]
		},
		{
			"id": "express-mw-order-bug-13",
			"question": "Why will this route never be reached?",
			"relatedCode": "app.use((req, res) => {\n  res.send('Blocked');\n});\napp.get('/home', (req, res) => {\n  res.send('Home');\n});",
			"options": [
				"GET routes must come first",
				"app.use blocks all routes below it",
				"res.send is async",
				"Express caches responses"
			],
			"relevantTags": [
				"middleware",
				"routing"
			]
		},
		{
			"id": "express-helmet-28",
			"question": "What does Helmet primarily provide?",
			"options": [
				"Authentication",
				"Security headers",
				"Rate limiting",
				"CORS"
			],
			"relevantTags": [
				"security"
			]
		},
		{
			"id": "express-error-mw-06",
			"question": "Which signature defines an Express error-handling middleware?",
			"options": [
				"(req, res, next)",
				"(err, req, res, next)",
				"(error, req, res)",
				"(req, err, res, next)"
			],
			"relevantTags": [
				"error-handling"
			]
		},
		{
			"id": "express-send-vs-json-26",
			"question": "What is a key difference between res.send and res.json?",
			"options": [
				"send cannot send objects",
				"json sets Content-Type to application/json",
				"json is async",
				"send auto stringifies twice"
			],
			"relevantTags": [
				"responses"
			]
		},
		{
			"id": "express-router-12",
			"question": "What is a key benefit of using `express.Router()`?",
			"options": [
				"Improves request speed",
				"Enables modular route definitions",
				"Automatically handles errors",
				"Adds middleware globally"
			],
			"relevantTags": [
				"router"
			]
		},
		{
			"id": "express-headers-sent-16",
			"question": "What does `ERR_HTTP_HEADERS_SENT` indicate?",
			"options": [
				"Invalid headers",
				"Response sent more than once",
				"Headers too large",
				"Missing Content-Type"
			],
			"relevantTags": [
				"errors",
				"debugging"
			]
		},
		{
			"id": "express-cors-14",
			"question": "What problem does CORS middleware solve?",
			"options": [
				"SQL Injection",
				"Cross-origin browser restrictions",
				"CSRF attacks",
				"Rate limiting"
			],
			"relevantTags": [
				"security",
				"cors"
			]
		},
		{
			"id": "express-404-25",
			"question": "How do you handle unmatched routes?",
			"options": [
				"Throw error",
				"Define wildcard route at end",
				"Use try/catch",
				"Restart server"
			],
			"relevantTags": [
				"routing"
			]
		},
		{
			"id": "express-multiple-res-04",
			"question": "What is the issue with this route handler?",
			"relatedCode": "app.get('/user', (req, res) => {\n  res.send('User');\n  res.status(200).json({ ok: true });\n});",
			"options": [
				"status() must be called before send()",
				"Multiple responses are being sent",
				"json() cannot be used in GET",
				"Express merges both responses"
			],
			"relevantTags": [
				"responses",
				"bugs"
			]
		},
		{
			"id": "express-async-mw-18",
			"question": "What happens if an async middleware never calls next()?",
			"options": [
				"Express retries it",
				"Request hangs",
				"Error middleware runs",
				"Route handler runs anyway"
			],
			"relevantTags": [
				"async",
				"bugs"
			]
		},
		{
			"id": "express-req-res-08",
			"question": "Which object holds parsed route params like `/user/:id`?",
			"options": [
				"req.query",
				"req.params",
				"req.body",
				"req.path"
			],
			"relevantTags": [
				"routing"
			]
		},
		{
			"id": "express-json-limit-10",
			"question": "How do you prevent large JSON payload attacks?",
			"options": [
				"Disable JSON parsing",
				"Use express.json({ limit })",
				"Use CORS",
				"Validate req.headers"
			],
			"relevantTags": [
				"security"
			]
		},
		{
			"id": "express-error-order-21",
			"question": "Where should error middleware be defined?",
			"options": [
				"Before routes",
				"After all routes",
				"Inside routers only",
				"Anywhere"
			],
			"relevantTags": [
				"error-handling"
			]
		},
		{
			"id": "express-mw-reuse-30",
			"question": "Why extract middleware into reusable functions?",
			"options": [
				"Improve performance",
				"Improve maintainability and testability",
				"Reduce bundle size",
				"Avoid async bugs"
			],
			"relevantTags": [
				"best-practices"
			]
		},
		{
			"id": "express-req-flow-17",
			"question": "When does Express stop executing middleware?",
			"options": [
				"When next() is called",
				"When res is sent",
				"When req ends",
				"When status code is set"
			],
			"relevantTags": [
				"middleware"
			]
		},
		{
			"id": "express-rate-limit-24",
			"question": "Why use rate limiting middleware?",
			"options": [
				"Reduce latency",
				"Prevent brute-force / DoS attacks",
				"Improve caching",
				"Fix CORS issues"
			],
			"relevantTags": [
				"security"
			]
		},
		{
			"id": "express-mw-skip-07",
			"question": "How do you skip to the next route handler in middleware?",
			"options": [
				"next()",
				"return",
				"next('route')",
				"res.end()"
			],
			"relevantTags": [
				"middleware",
				"routing"
			]
		},
		{
			"id": "express-res-end-22",
			"question": "What does `res.end()` do?",
			"options": [
				"Sets status code",
				"Ends response without body",
				"Sends JSON",
				"Terminates server"
			],
			"relevantTags": [
				"responses"
			]
		}
	];