# Interview Quiz App

A frontend-focused interview preparation app built with Next.js.  
The app quizzes users on commonly asked Frontend and Full-Stack interview questions using MCQs, with an emphasis on real interview signal rather than trivia.

---

## Features

- Topic-based quizzes (JavaScript, React, Next.js, Node.js, Express, MongoDB, TypeScript)
- Randomized question selection per attempt
- Question bank remains server-only
- Find-the-Bug style questions
- Frontend System Design MCQs
- Server-side evaluation of answers
- Type-safe and modular architecture

---

## Question Schema

All questions follow the structure below:

```ts
{
  id: string;
  question: string;
  relatedCode?: string;
  options: string[]; // length = 4
  answer: number; // index of correct option
  relevantTags?: string[];
}
````

---

## API Endpoints

### Get Questions

Returns 20 random questions for a given topic.

```
GET /api/getQuestions?topic=react
```

Response:

```json
{
  "data": [ /* 20 questions */ ]
}
```

* Full question bank stays on the server
* Questions are randomized per request

---

### Submit Results

Evaluates user answers on the server.

```
POST /api/getResults
```

Payload:

```json
{
  "topic": "react",
  "userAnswers": [
    { "id": "react-key-02", "ansIndex": 1 },
    { "id": "react-effect-05", "ansIndex": 2 }
  ]
}
```

Response:

```json
{
  "data": 14,
  "answers": []
}
```

---

## Quiz Types Included

* Standard MCQs
* Find-the-Bug (JavaScript, React, Next.js)
* Output prediction questions
* React mental model questions
* Frontend System Design questions
* Next.js App Router pitfalls

---

## Tech Stack

* Next.js (App Router)
* React
* TypeScript
* Server-only APIs
* No database (question bank stored as TypeScript assets)

---

## Security and Design Notes

* Question bank is server-only
* Client receives a limited subset per attempt
* Answers are validated on the server
* Designed for interview preparation, not secure examinations

---

## Possible Future Enhancements

* Timed quiz mode
* Difficulty-based question selection
* Retry incorrect questions
* Weak-area analysis
* Progress tracking with authentication

---

## Purpose

This project is intended to:

* Prepare for real frontend and full-stack interviews
* Strengthen debugging and reasoning skills
* Demonstrate senior-level frontend engineering thinking
* Be easy to explain and defend during interviews
