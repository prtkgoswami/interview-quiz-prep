"use client";
import { Question } from "@/types/question";
import React, { useEffect, useState } from "react";

type Props = {
  currentQuestion?: Question;
  currentAnswer?: number;
  currentQIndex?: number;
  hasNext: boolean;
  hasPrev: boolean;
  percentComplete: number;
  isResultView?: boolean;
  correctAnswer?: number;
  addAnswer?: (index: number, ans: number) => void;
  endQuiz?: () => void;
  next: () => void;
  prev: () => void;
};

const QuestionView = ({
  currentQuestion,
  currentAnswer,
  currentQIndex = 0,
  hasNext,
  hasPrev,
  percentComplete,
  isResultView,
  correctAnswer,
  addAnswer,
  endQuiz,
  next,
  prev,
}: Props) => {

  const [selectedOption, setSelectedOption] = useState<number>(
    currentAnswer === undefined ? -1 : currentAnswer
  );

  const handleOptionSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isResultView) return;
    setSelectedOption(Number(e.target.value));
  };

  const handleNextClick = () => {
    if (selectedOption >= 0 && !isResultView)
      addAnswer?.(currentQIndex, selectedOption);

    if (hasNext) next();
    else endQuiz?.();
  };

  const handlePrevClick = () => {
    if (selectedOption >= 0 && !isResultView)
      addAnswer?.(currentQIndex, selectedOption);
    if (hasPrev) prev();
  };

  useEffect(() => {
    setSelectedOption(currentAnswer ?? -1);
  }, [currentQuestion, currentAnswer]);

  return (
    <div className="w-[90%] md:w-[60%] bg-zinc-200 rounded-lg shadow-xl">
      <div
        className={`h-2 bg-blue-400 rounded-tl-lg ${
          percentComplete === 100 ? "rounded-tr-lg" : ""
        }`}
        style={{ width: `${percentComplete}%` }}
      />
      <div className="p-8 flex flex-col gap-5">
        <h2 className="text-lg md:text-xl">{currentQuestion?.question}</h2>

        {currentQuestion?.relatedCode && (
          <pre className="whitespace-pre-wrap wrap-break-words overflow-x-auto bg-zinc-800 text-zinc-50 px-5 md:px-8 py-5 rounded-lg text-xs md:text-lg">
            {currentQuestion?.relatedCode}
          </pre>
        )}

        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-xl pb-2 border-b border-zinc-400">Options:</p>

          <fieldset className="flex flex-col gap-2">
            <input
              type="radio"
              name="ans"
              value={-1}
              onChange={handleOptionSelect}
              checked={selectedOption === -1}
              className="hidden"
            />
            {currentQuestion?.options.map((opt, i) => (
              <label
                key={`${currentQuestion.id}-option-${i}`}
                className={`border ${
                  isResultView && i === correctAnswer
                    ? "bg-green-200! border-green-500!"
                    : "border-transparent"
                } ${
                  isResultView && i === currentAnswer
                    ? "bg-red-200 border-red-500"
                    : "border-transparent"
                }`}
              >
                <input
                  type="radio"
                  name="ans"
                  value={i}
                  onChange={handleOptionSelect}
                  checked={selectedOption === i}
                  className="mr-1"
                  disabled={isResultView}
                />{" "}
                {opt}
              </label>
            ))}
          </fieldset>
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="cursor-pointer md:px-8 py-3 w-full md:w-max bg-amber-400 hover:bg-amber-500 text-zinc-800 disabled:bg-zinc-300 disabled:text-zinc-600 rounded-lg"
            disabled={!hasPrev}
            onClick={handlePrevClick}
          >
            Prev
          </button>

          <button
            type="button"
            className="cursor-pointer md:px-8 py-3 w-full md:w-max bg-amber-400 hover:bg-amber-500 text-zinc-800 disabled:bg-zinc-300 disabled:text-zinc-600 rounded-lg"
            onClick={handleNextClick}
            disabled={isResultView && !hasNext}
          >
            {hasNext || isResultView ? "Next" : "Get Results"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionView;
