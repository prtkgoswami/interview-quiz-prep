import { Topic } from "@/assets";
import { Question } from "@/types/question";
import React, { useRef, useState } from "react";

type HookResponse = {
  currentQuestion?: Question;
  currentAnswer?: number;
  activeQIndex: number;
  isFetching: boolean;
  isLoadingResults: boolean;
  error?: Error;
  hasNext: boolean;
  hasPrev: boolean;
  isActive: boolean;
  isEnded: boolean;
  percentComplete: number;
  score: number;
  questionsCount: number;
  currentCorrectAnswer?: number;
  addAnswer: (index: number, ans: number) => void;
  startQuiz: () => void;
  endQuiz: () => void;
  reset: () => void;
  next: () => void;
  prev: () => void;
};

const useQuiz = (topic?: Topic): HookResponse => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeQIndex, setActiveQIndex] = useState(-1);
  const [score, setScore] = useState(-1);
  const answers = useRef<number[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [error, setError] = useState<Error | undefined>();

  const fetchQuestions = async () => {
    try {
      setError(undefined);
      setIsFetching(true);
      await fetch(`/api/getQuestions/?topic=${topic}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (data) => await data.json())
        .then((data) => {
          const qs = data.data;
          setQuestions(qs);
          answers.current = Array.from({ length: qs.length }, (_, i) => -1);
        })
        .catch((err) => {
          throw new Error("Failed to fetch Questions");
        });
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsFetching(false);
    }
  };

  const getResult = async () => {
    try {
      setError(undefined);
      setIsLoadingResults(true);
      const ansList = answers.current.map((ans, i) => {
        const question = questions[i];
        return {
          id: question.id,
          selectedIndex: ans,
          correctIndex: question.correctIndex,
        };
      });

      await fetch(`/api/getResult/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: topic,
          answers: ansList,
        }),
      })
        .then(async (data) => await data.json())
        .then((data) => {
          setScore(data.data.score);
          setCorrectAnswers(
            questions.map((question) => question.correctIndex ?? -1)
          );
        })
        .catch((err) => {
          throw new Error("Failed to fetch Result");
        });
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoadingResults(false);
    }
  };

  const addAnswer = (index: number, ans: number) => {
    answers.current[index] = ans;
  };

  const next = () => {
    setActiveQIndex((prev) => prev + 1);
  };

  const prev = () => {
    setActiveQIndex((prev) => prev - 1);
  };

  const startQuiz = async () => {
    await fetchQuestions();
    setActiveQIndex(0);
  };

  const endQuiz = async () => {
    await getResult();
    setActiveQIndex(0);
  };

  const reset = () => {
    setQuestions([]), setActiveQIndex(-1);
    setScore(-1);
    answers.current = [];
    setError(undefined);
  };

  return {
    currentQuestion: activeQIndex >= 0 ? questions[activeQIndex] : undefined,
    currentAnswer: activeQIndex >= 0 ? answers.current[activeQIndex] : -1,
    activeQIndex,
    isFetching,
    isLoadingResults,
    error,
    hasNext: questions.length > 0 && activeQIndex < questions.length - 1,
    hasPrev: questions.length > 0 && activeQIndex > 0,
    isActive:
      !isLoadingResults &&
      !isFetching &&
      !error &&
      activeQIndex >= 0 &&
      activeQIndex <= questions.length &&
      score < 0,
    isEnded: score >= 0,
    percentComplete:
      questions.length > 0
        ? Math.max((activeQIndex / questions.length) * 100, 1)
        : 1,
    score,
    questionsCount: questions.length,
    currentCorrectAnswer:
      activeQIndex >= 0 ? correctAnswers[activeQIndex] : undefined,
    addAnswer,
    startQuiz,
    endQuiz,
    reset,
    next,
    prev,
  };
};

export default useQuiz;
