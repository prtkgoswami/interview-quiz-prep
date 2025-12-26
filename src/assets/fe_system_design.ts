export const Questions = [
  {
    id: "fsd-rendering-01",
    question: "Which rendering strategy is best for SEO-critical pages with dynamic data?",
    options: [
      "Client-side rendering (CSR)",
      "Server-side rendering (SSR)",
      "Static Site Generation (SSG)",
      "Web Workers"
    ],
    answer: 1,
    relevantTags: ["rendering", "seo"]
  },
  {
    id: "fsd-rendering-02",
    question: "When is Static Site Generation (SSG) the best choice?",
    options: [
      "Highly personalized dashboards",
      "Frequently changing data",
      "Content that rarely changes",
      "Real-time applications"
    ],
    answer: 2,
    relevantTags: ["rendering", "ssg"]
  },
  {
    id: "fsd-isr-03",
    question: "Why would you choose Incremental Static Regeneration (ISR)?",
    options: [
      "To disable caching",
      "To update static pages without full rebuild",
      "To avoid hydration",
      "To improve client-side routing"
    ],
    answer: 1,
    relevantTags: ["isr", "caching"]
  },
  {
    id: "fsd-data-fetch-04",
    question: "What is the main downside of fetching all data on the client?",
    options: [
      "Slower navigation",
      "Poor SEO and slower first paint",
      "Increased bundle size",
      "Harder caching"
    ],
    answer: 1,
    relevantTags: ["data-fetching", "csr"]
  },
  {
    id: "fsd-caching-05",
    question: "Which cache should be closest to the user for fastest response?",
    options: [
      "Database cache",
      "Server memory cache",
      "CDN / Edge cache",
      "Browser localStorage"
    ],
    answer: 2,
    relevantTags: ["caching", "performance"]
  },
  {
    id: "fsd-state-06",
    question: "When should global state management (Redux/Zustand) be avoided?",
    options: [
      "Small, isolated UI state",
      "Shared cross-page data",
      "Auth state",
      "Theme configuration"
    ],
    answer: 0,
    relevantTags: ["state-management"]
  },
  {
    id: "fsd-state-07",
    question: "What is a common downside of excessive global state?",
    options: [
      "TypeScript errors",
      "Tight coupling and unnecessary re-renders",
      "Slower builds",
      "Larger HTML size"
    ],
    answer: 1,
    relevantTags: ["state-management"]
  },
  {
    id: "fsd-server-vs-client-08",
    question: "What is a key advantage of moving logic to the server?",
    options: [
      "Faster client-side rendering",
      "Reduced client bundle size",
      "Better animations",
      "Simpler routing"
    ],
    answer: 1,
    relevantTags: ["architecture"]
  },
  {
    id: "fsd-api-design-09",
    question: "Why should APIs avoid over-fetching data?",
    options: [
      "Security only",
      "Increased payload size and slower performance",
      "Harder validation",
      "More API calls"
    ],
    answer: 1,
    relevantTags: ["api-design"]
  },
  {
    id: "fsd-pagination-10",
    question: "Which pagination strategy scales best for large datasets?",
    options: [
      "Offset-based pagination",
      "Client-side pagination",
      "Cursor-based pagination",
      "Infinite scrolling without limits"
    ],
    answer: 2,
    relevantTags: ["pagination", "performance"]
  },
  {
    id: "fsd-infinite-scroll-11",
    question: "What is a key drawback of infinite scrolling?",
    options: [
      "Harder SEO and deep linking",
      "Slower initial load",
      "More API calls",
      "More JavaScript"
    ],
    answer: 0,
    relevantTags: ["ux", "pagination"]
  },
  {
    id: "fsd-performance-12",
    question: "Which technique reduces initial JavaScript load the most?",
    options: [
      "Memoization",
      "Code splitting",
      "useEffect optimization",
      "Virtual DOM diffing"
    ],
    answer: 1,
    relevantTags: ["performance"]
  },
  {
    id: "fsd-list-virtual-13",
    question: "When should list virtualization be used?",
    options: [
      "Small lists",
      "Static lists",
      "Large, scrollable lists",
      "Server-rendered lists"
    ],
    answer: 2,
    relevantTags: ["performance", "virtualization"]
  },
  {
    id: "fsd-image-14",
    question: "What is the primary benefit of image optimization pipelines?",
    options: [
      "Better SEO",
      "Reduced bandwidth and faster load",
      "Cleaner HTML",
      "Better caching"
    ],
    answer: 1,
    relevantTags: ["performance", "images"]
  },
  {
    id: "fsd-auth-15",
    question: "Where should sensitive auth logic ideally live?",
    options: [
      "Client-side only",
      "Server-side",
      "LocalStorage",
      "Service Worker"
    ],
    answer: 1,
    relevantTags: ["auth", "security"]
  },
  {
    id: "fsd-jwt-16",
    question: "Why is storing JWTs in localStorage risky?",
    options: [
      "JWTs expire quickly",
      "Vulnerable to XSS attacks",
      "Slower access",
      "Not supported in all browsers"
    ],
    answer: 1,
    relevantTags: ["security", "auth"]
  },
  {
    id: "fsd-cors-17",
    question: "What problem does CORS primarily address?",
    options: [
      "SQL injection",
      "Cross-origin browser restrictions",
      "Authentication",
      "API versioning"
    ],
    answer: 1,
    relevantTags: ["security"]
  },
  {
    id: "fsd-error-18",
    question: "Why should frontend apps handle partial API failures gracefully?",
    options: [
      "Better animations",
      "Improved UX and resilience",
      "Faster builds",
      "Simpler code"
    ],
    answer: 1,
    relevantTags: ["resilience"]
  },
  {
    id: "fsd-monitoring-19",
    question: "What is the primary purpose of frontend monitoring?",
    options: [
      "Track backend errors",
      "Measure user experience and failures",
      "Improve SEO",
      "Reduce bundle size"
    ],
    answer: 1,
    relevantTags: ["monitoring"]
  },
  {
    id: "fsd-feature-flags-20",
    question: "Why use feature flags in frontend systems?",
    options: [
      "Improve performance",
      "Gradual rollout and quick rollback",
      "Reduce bundle size",
      "Avoid caching"
    ],
    answer: 1,
    relevantTags: ["architecture"]
  },
  {
    id: "fsd-micro-frontends-21",
    question: "What is a common downside of micro-frontends?",
    options: [
      "Faster builds",
      "Increased complexity and duplication",
      "Better isolation",
      "Independent deployments"
    ],
    answer: 1,
    relevantTags: ["architecture"]
  },
  {
    id: "fsd-shared-ui-22",
    question: "How should shared UI components be managed at scale?",
    options: [
      "Copy-paste between apps",
      "Shared design system / component library",
      "Inline styles",
      "Per-team implementations"
    ],
    answer: 1,
    relevantTags: ["design-system"]
  },
  {
    id: "fsd-versioning-23",
    question: "Why is API versioning important for frontend systems?",
    options: [
      "Better caching",
      "Backward compatibility",
      "Faster responses",
      "Smaller payloads"
    ],
    answer: 1,
    relevantTags: ["api-design"]
  },
  {
    id: "fsd-build-24",
    question: "What is a downside of very large JavaScript bundles?",
    options: [
      "More server load",
      "Slower initial load and parsing",
      "SEO issues",
      "Hydration mismatch"
    ],
    answer: 1,
    relevantTags: ["performance"]
  },
  {
    id: "fsd-ssr-cost-25",
    question: "What is a trade-off of Server-Side Rendering?",
    options: [
      "Poor SEO",
      "Higher server cost and complexity",
      "Slower navigation",
      "Larger client bundle"
    ],
    answer: 1,
    relevantTags: ["ssr"]
  },
  {
    id: "fsd-client-cache-26",
    question: "When should client-side caching be invalidated?",
    options: [
      "Never",
      "When data becomes stale or user logs out",
      "On every render",
      "Only on refresh"
    ],
    answer: 1,
    relevantTags: ["caching"]
  },
  {
    id: "fsd-realtime-27",
    question: "Which use case best fits WebSockets?",
    options: [
      "Static blogs",
      "Real-time collaboration",
      "SEO pages",
      "Batch processing"
    ],
    answer: 1,
    relevantTags: ["realtime"]
  },
  {
    id: "fsd-network-28",
    question: "Why should frontend apps minimize API round trips?",
    options: [
      "Reduce backend load",
      "Lower latency and better UX",
      "Improve SEO",
      "Reduce JavaScript size"
    ],
    answer: 1,
    relevantTags: ["performance"]
  },
  {
    id: "fsd-accessibility-29",
    question: "Why is accessibility important in frontend system design?",
    options: [
      "Legal compliance only",
      "Better UX for all users",
      "Smaller bundle size",
      "Faster rendering"
    ],
    answer: 1,
    relevantTags: ["accessibility"]
  },
  {
    id: "fsd-tradeoffs-30",
    question: "What is the key goal of frontend system design interviews?",
    options: [
      "Perfect architecture",
      "Correct trade-off reasoning",
      "Framework knowledge",
      "Code syntax"
    ],
    answer: 1,
    relevantTags: ["interviews"]
  }
]
