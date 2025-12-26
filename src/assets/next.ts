import { Question } from "@/types/question";

export const Questions : Question[] = [
  {
    id: "next-rendering-01",
    question: "What is the primary benefit of Server-Side Rendering (SSR) in Next.js?",
    options: [
      "Faster client-side navigation",
      "Better SEO and initial load",
      "Smaller bundle size",
      "No JavaScript required"
    ],
    answer: 1,
    relevantTags: ["ssr"]
  },
  {
    id: "next-ssg-02",
    question: "When is Static Site Generation (SSG) performed?",
    options: [
      "On every request",
      "At build time",
      "On the client",
      "On server startup only"
    ],
    answer: 1,
    relevantTags: ["ssg"]
  },
  {
    id: "next-isr-03",
    question: "What problem does Incremental Static Regeneration (ISR) solve?",
    options: [
      "Hydration mismatch",
      "Updating static pages without full rebuild",
      "Client-side routing",
      "API authentication"
    ],
    answer: 1,
    relevantTags: ["isr"]
  },
  {
    id: "next-csr-04",
    question: "Which rendering strategy behaves most like a CRA app?",
    options: ["SSR", "SSG", "ISR", "CSR"],
    answer: 3,
    relevantTags: ["csr"]
  },
  {
    id: "next-hydration-05",
    question: "What causes a hydration mismatch error?",
    options: [
      "Different HTML on server and client",
      "Missing useEffect",
      "Slow network",
      "Invalid props"
    ],
    answer: 0,
    relevantTags: ["hydration"]
  },
  {
    id: "next-use-client-06",
    question: "Why is the `'use client'` directive required?",
    options: [
      "Enable routing",
      "Enable browser-only APIs and hooks",
      "Improve performance",
      "Enable SSR"
    ],
    answer: 1,
    relevantTags: ["app-router"]
  },
  {
    id: "next-server-component-07",
    question: "Which is true about Server Components?",
    options: [
      "They can use useState",
      "They can access database directly",
      "They run in the browser",
      "They increase JS bundle size"
    ],
    answer: 1,
    relevantTags: ["server-components"]
  },
  {
    id: "next-client-component-08",
    question: "What is a downside of Client Components?",
    options: [
      "Cannot fetch data",
      "Larger JavaScript bundle",
      "Cannot receive props",
      "No interactivity"
    ],
    answer: 1,
    relevantTags: ["client-components"]
  },
  {
    id: "next-routing-09",
    question: "How are routes defined in the App Router?",
    options: [
      "Using route config",
      "File-system based routing",
      "Manual registration",
      "index.js only"
    ],
    answer: 1,
    relevantTags: ["routing"]
  },
  {
    id: "next-layout-10",
    question: "What is the purpose of layout.tsx?",
    options: [
      "Define metadata only",
      "Wrap pages with shared UI",
      "Handle API routes",
      "Define dynamic routes"
    ],
    answer: 1,
    relevantTags: ["layout"]
  },
  {
    id: "next-nested-layout-11",
    question: "What happens with nested layouts?",
    options: [
      "They replace parent layouts",
      "They compose hierarchically",
      "They are ignored",
      "They run only on client"
    ],
    answer: 1,
    relevantTags: ["layout"]
  },
  {
    id: "next-loading-12",
    question: "What is loading.tsx used for?",
    options: [
      "Error handling",
      "Route-level loading UI",
      "API fallback",
      "Metadata loading"
    ],
    answer: 1,
    relevantTags: ["loading"]
  },
  {
    id: "next-error-13",
    question: "What does error.tsx handle?",
    options: [
      "404 errors",
      "Runtime errors in route segments",
      "Build errors",
      "API errors only"
    ],
    answer: 1,
    relevantTags: ["error-handling"]
  },
  {
    id: "next-not-found-14",
    question: "What is not-found.tsx used for?",
    options: [
      "Server crashes",
      "Unhandled promise rejections",
      "404 routes",
      "Unauthorized access"
    ],
    answer: 2,
    relevantTags: ["routing"]
  },
  {
    id: "next-data-fetch-15",
    question: "Where is data fetching recommended in App Router?",
    options: [
      "useEffect",
      "getServerSideProps",
      "Server Components",
      "componentDidMount"
    ],
    answer: 2,
    relevantTags: ["data-fetching"]
  },
  {
    id: "next-fetch-cache-16",
    question: "By default, how does fetch behave in Server Components?",
    options: [
      "No caching",
      "Cached and deduplicated",
      "Client-side only",
      "Blocks rendering"
    ],
    answer: 1,
    relevantTags: ["fetch", "caching"]
  },
  {
    id: "next-revalidate-17",
    question: "What does `revalidate: 60` mean?",
    options: [
      "Cache for 60 seconds",
      "Rebuild every 60 requests",
      "Client re-fetch every 60 seconds",
      "Invalidate cache manually"
    ],
    answer: 0,
    relevantTags: ["isr", "caching"]
  },
  {
    id: "next-dynamic-18",
    question: "What does `dynamic = 'force-dynamic'` do?",
    options: [
      "Forces SSG",
      "Forces SSR",
      "Forces client rendering",
      "Disables routing"
    ],
    answer: 1,
    relevantTags: ["rendering"]
  },
  {
    id: "next-api-routes-19",
    question: "Where are API routes defined in App Router?",
    options: [
      "pages/api",
      "app/api/route.ts",
      "api.js",
      "server.ts"
    ],
    answer: 1,
    relevantTags: ["api"]
  },
  {
    id: "next-edge-20",
    question: "What is a key benefit of Edge Runtime?",
    options: [
      "Full Node APIs",
      "Lower latency",
      "Better debugging",
      "Larger memory"
    ],
    answer: 1,
    relevantTags: ["edge"]
  },
  {
    id: "next-env-21",
    question: "Which env variables are exposed to the browser?",
    options: [
      "All",
      "Only server variables",
      "NEXT_PUBLIC_* variables",
      "process.env only"
    ],
    answer: 2,
    relevantTags: ["env"]
  },
  {
    id: "next-image-22",
    question: "What problem does next/image solve?",
    options: [
      "Routing",
      "Image optimization",
      "Lazy loading components",
      "SEO metadata"
    ],
    answer: 1,
    relevantTags: ["image"]
  },
  {
    id: "next-link-23",
    question: "Why use next/link instead of <a>?",
    options: [
      "Better styling",
      "Client-side navigation",
      "SEO only",
      "Required by Next.js"
    ],
    answer: 1,
    relevantTags: ["routing"]
  },
  {
    id: "next-metadata-24",
    question: "How is metadata defined in App Router?",
    options: [
      "Head component only",
      "metadata export",
      "getHeadProps",
      "useEffect"
    ],
    answer: 1,
    relevantTags: ["metadata"]
  },
  {
    id: "next-font-25",
    question: "What does next/font optimize?",
    options: [
      "Icons",
      "Font loading and CLS",
      "CSS size",
      "Image fonts"
    ],
    answer: 1,
    relevantTags: ["performance"]
  },
  {
    id: "next-bundle-26",
    question: "What increases client bundle size the most?",
    options: [
      "Server Components",
      "Client Components",
      "Layouts",
      "Metadata"
    ],
    answer: 1,
    relevantTags: ["performance"]
  },
  {
    id: "next-parallel-routes-27",
    question: "What are parallel routes used for?",
    options: [
      "SEO",
      "Rendering multiple UI sections independently",
      "API routing",
      "Dynamic imports"
    ],
    answer: 1,
    relevantTags: ["routing"]
  },
  {
    id: "next-intercepting-28",
    question: "What do intercepting routes enable?",
    options: [
      "Auth guards",
      "Modal-style navigation",
      "API interception",
      "Prefetching"
    ],
    answer: 1,
    relevantTags: ["routing"]
  },
  {
    id: "next-build-error-29",
    question: "Why does using `window` in a Server Component fail?",
    options: [
      "window is deprecated",
      "Server Components run on server",
      "Hydration issue",
      "TypeScript error"
    ],
    answer: 1,
    relevantTags: ["server-components"]
  },
  {
    id: "next-cache-bug-30",
    question: "Why might server data appear stale?",
    options: [
      "Client-side caching",
      "Fetch caching without revalidation",
      "Hydration mismatch",
      "Missing useEffect"
    ],
    answer: 1,
    relevantTags: ["caching"]
  }
]
