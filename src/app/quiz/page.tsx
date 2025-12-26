"use client";
import { Topic } from "@/assets";
import { notFound, useSearchParams } from "next/navigation";
import QuizView from "./QuizView";
import { Suspense } from "react";

const QuizViewWrapper = () => {
  const searchParams = useSearchParams();
  const topic = (searchParams?.get("topic") as Topic) ?? null;

  if (!topic) {
    notFound();
  }

  return <QuizView topic={topic} />;
};

const QuizPage = () => {
  return (
    <Suspense
      fallback={
        <h1 className="text-4xl text-zinc-200 text-center leading-relaxed">
          Fetching Questions{" "}
          <span className="w-2 h-2 inline-block ml-2 rounded-full bg-amber-500 animate-bounce" />
          <span className="w-2 h-2 inline-block ml-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.2s]" />
          <span className="w-2 h-2 inline-block ml-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.4s]" />
        </h1>
      }
    >
      <QuizViewWrapper />
    </Suspense>
  );
};

export default QuizPage;
