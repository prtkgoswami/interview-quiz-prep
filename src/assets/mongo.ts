import { Question } from "@/types/question";

export const Questions: Question[] = [
  {
    id: "mongo-document-01",
    question: "What is the basic unit of data in MongoDB?",
    options: [
      "Row",
      "Document",
      "Table",
      "Schema"
    ],
    answer: 1,
    relevantTags: ["basics"]
  },
  {
    id: "mongo-schema-02",
    question: "How does MongoDB handle schemas?",
    options: [
      "Schema is mandatory",
      "Schema-less but structure can be enforced at app level",
      "No structure allowed",
      "Schemas are compiled"
    ],
    answer: 1,
    relevantTags: ["schema"]
  },
  {
    id: "mongo-objectid-03",
    question: "What is true about MongoDB ObjectId?",
    options: [
      "It is a random UUID",
      "It encodes timestamp and uniqueness",
      "It is always sequential",
      "It is numeric"
    ],
    answer: 1,
    relevantTags: ["objectid"]
  },
  {
    id: "mongo-find-vs-findone-04",
    question: "What is the difference between find() and findOne()?",
    options: [
      "find returns cursor, findOne returns document",
      "find is async, findOne is sync",
      "findOne returns array",
      "No difference"
    ],
    answer: 0,
    relevantTags: ["queries"]
  },
  {
    id: "mongo-index-05",
    question: "What is the main purpose of indexes?",
    options: [
      "Reduce memory usage",
      "Speed up query performance",
      "Enforce schema",
      "Compress data"
    ],
    answer: 1,
    relevantTags: ["indexes"]
  },
  {
    id: "mongo-index-write-06",
    question: "What is a downside of having too many indexes?",
    options: [
      "Slower reads",
      "Slower writes",
      "Larger documents",
      "Schema conflicts"
    ],
    answer: 1,
    relevantTags: ["indexes", "performance"]
  },
  {
    id: "mongo-unique-index-07",
    question: "What does a unique index guarantee?",
    options: [
      "Unique across collections",
      "Unique per document",
      "Unique values in indexed field",
      "Unique schema"
    ],
    answer: 2,
    relevantTags: ["indexes"]
  },
  {
    id: "mongo-explain-08",
    question: "Why use `explain()`?",
    options: [
      "Validate schema",
      "Debug aggregation",
      "Analyze query performance",
      "Log queries"
    ],
    answer: 2,
    relevantTags: ["performance"]
  },
  {
    id: "mongo-aggregation-09",
    question: "What does the aggregation pipeline do?",
    options: [
      "Run SQL joins",
      "Process data in stages",
      "Update documents",
      "Delete documents"
    ],
    answer: 1,
    relevantTags: ["aggregation"]
  },
  {
    id: "mongo-match-stage-10",
    question: "What is the purpose of `$match`?",
    options: [
      "Group documents",
      "Filter documents",
      "Sort documents",
      "Transform fields"
    ],
    answer: 1,
    relevantTags: ["aggregation"]
  },
  {
    id: "mongo-group-stage-11",
    question: "What does `$group` do?",
    options: [
      "Filters documents",
      "Aggregates documents by key",
      "Joins collections",
      "Sorts documents"
    ],
    answer: 1,
    relevantTags: ["aggregation"]
  },
  {
    id: "mongo-lookup-12",
    question: "What does `$lookup` provide?",
    options: [
      "Index lookup",
      "SQL-like joins",
      "Full-text search",
      "Schema validation"
    ],
    answer: 1,
    relevantTags: ["aggregation"]
  },
  {
    id: "mongo-embedded-vs-ref-13",
    question: "When should documents be embedded?",
    options: [
      "When data is large and shared",
      "When data is frequently accessed together",
      "When schema is fixed",
      "When using transactions"
    ],
    answer: 1,
    relevantTags: ["data-modeling"]
  },
  {
    id: "mongo-ref-14",
    question: "When should references be preferred?",
    options: [
      "One-to-few relationships",
      "Many-to-many with frequent reuse",
      "Small subdocuments",
      "Read-heavy data"
    ],
    answer: 1,
    relevantTags: ["data-modeling"]
  },
  {
    id: "mongo-atomic-15",
    question: "What operations are atomic in MongoDB?",
    options: [
      "Entire collection updates",
      "Single document updates",
      "Aggregation pipelines",
      "Transactions only"
    ],
    answer: 1,
    relevantTags: ["atomicity"]
  },
  {
    id: "mongo-transactions-16",
    question: "When are multi-document transactions needed?",
    options: [
      "Single document update",
      "Cross-collection consistency",
      "Read-only queries",
      "Index creation"
    ],
    answer: 1,
    relevantTags: ["transactions"]
  },
  {
    id: "mongo-update-operators-17",
    question: "What does `$set` do?",
    options: [
      "Adds new document",
      "Updates specific fields",
      "Deletes field",
      "Renames collection"
    ],
    answer: 1,
    relevantTags: ["updates"]
  },
  {
    id: "mongo-inc-18",
    question: "What does `$inc` ensure?",
    options: [
      "Increment is atomic",
      "Increment is async",
      "Increment is indexed",
      "Increment is cached"
    ],
    answer: 0,
    relevantTags: ["updates"]
  },
  {
    id: "mongo-upsert-19",
    question: "What does `upsert: true` do?",
    options: [
      "Update only",
      "Insert only",
      "Update or insert if not found",
      "Overwrite document"
    ],
    answer: 2,
    relevantTags: ["updates"]
  },
  {
    id: "mongo-delete-20",
    question: "What does deleteOne do?",
    options: [
      "Deletes all matches",
      "Deletes first matching document",
      "Deletes collection",
      "Deletes index"
    ],
    answer: 1,
    relevantTags: ["delete"]
  },
  {
    id: "mongo-sort-limit-21",
    question: "Why apply `$limit` early in pipeline?",
    options: [
      "Better readability",
      "Reduce documents processed later",
      "Required by MongoDB",
      "Avoid errors"
    ],
    answer: 1,
    relevantTags: ["aggregation", "performance"]
  },
  {
    id: "mongo-text-index-22",
    question: "What does a text index enable?",
    options: [
      "Regex search",
      "Full-text search",
      "Geo queries",
      "Sorting"
    ],
    answer: 1,
    relevantTags: ["indexes"]
  },
  {
    id: "mongo-scan-23",
    question: "What does a collection scan indicate?",
    options: [
      "Index usage",
      "Missing or unused index",
      "Query error",
      "Corrupt data"
    ],
    answer: 1,
    relevantTags: ["performance"]
  },
  {
    id: "mongo-ttl-24",
    question: "What is a TTL index used for?",
    options: [
      "Soft deletes",
      "Automatic document expiration",
      "Rate limiting",
      "Archiving"
    ],
    answer: 1,
    relevantTags: ["indexes"]
  },
  {
    id: "mongo-null-vs-missing-25",
    question: "How does MongoDB treat null vs missing fields?",
    options: [
      "Same",
      "Different in queries",
      "Null is ignored",
      "Missing is error"
    ],
    answer: 1,
    relevantTags: ["queries"]
  },
  {
    id: "mongo-array-query-26",
    question: "Which operator matches array elements?",
    options: [
      "$in",
      "$elemMatch",
      "$match",
      "$all"
    ],
    answer: 1,
    relevantTags: ["arrays"]
  },
  {
    id: "mongo-pagination-skip-27",
    question: "Why is skip() inefficient for large datasets?",
    options: [
      "Uses memory",
      "Scans skipped documents",
      "Blocks writes",
      "Breaks indexes"
    ],
    answer: 1,
    relevantTags: ["performance"]
  },
  {
    id: "mongo-cursor-28",
    question: "What is a cursor?",
    options: [
      "A pointer to index",
      "An iterator over query results",
      "A document reference",
      "A transaction"
    ],
    answer: 1,
    relevantTags: ["queries"]
  },
  {
    id: "mongo-replica-set-29",
    question: "Why use a replica set?",
    options: [
      "Sharding",
      "High availability",
      "Faster queries",
      "Schema enforcement"
    ],
    answer: 1,
    relevantTags: ["scaling"]
  },
  {
    id: "mongo-sharding-30",
    question: "What problem does sharding solve?",
    options: [
      "High availability",
      "Horizontal scaling",
      "Schema validation",
      "Index creation"
    ],
    answer: 1,
    relevantTags: ["scaling"]
  }
]
