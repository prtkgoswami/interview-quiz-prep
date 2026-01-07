"use client";
import { Topic } from "@/assets";
import { timeStamp } from "console";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  score: number;
  totalCount: number;
  topic: Topic;
  reset: () => void;
};

type PreviousScore = {
  score: number;
  timestamp: number;
};

const ResultView = ({ score, totalCount, topic, reset }: Props) => {
  const [previousScore, setPreviousScore] = useState<
    PreviousScore | undefined
  >();
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (!isFirstRun.current) return;

    const storageKey = `previous-score-${topic}`;
    const prevData = localStorage.getItem(storageKey);
    if (prevData) {
      setPreviousScore(JSON.parse(prevData));
    }
    isFirstRun.current = false;
  }, [topic]);

  useEffect(() => {
    const storageKey = `previous-score-${topic}`;
    const data = {
      score,
      timestamp: Date.now(),
    };
    localStorage.setItem(storageKey, JSON.stringify(data));
  }, [score, topic]);

  return (
    <div className="w-[90%] md:w-[60%] bg-zinc-200 p-4 pb-8 md:p-8 rounded-lg shadow-xl flex flex-col items-center gap-4">
      <h4 className="w-full text-2xl font-extralight p-2 border-b border-zinc-400 text-zinc-800">
        Results
      </h4>
      <div className="flex flex-col md:flex-row items-center justify-center w-[90%] gap-4 ">
        {previousScore && (
          <div className="px-5 py-5 w-3/4 md:w-1/2 h-max bg-amber-500 rounded-lg shadow-xl flex flex-col gap-4 justify-center items-center md:my-8">
            <div className="text-center">
              <h3 className="text-4xl text-zinc-800 font-medium">Previously</h3>
              <p className="text-xs text-zinc-700">
                {new Date(previousScore.timestamp).toLocaleDateString(
                  undefined,
                  {
                    year: "2-digit",
                    month: "numeric",
                    day: "numeric",
                  }
                )}
              </p>
            </div>
            <h1 className="text-6xl font-semibold text-zinc-800">
              {previousScore.score}
            </h1>
            <p className="text-zinc-700 ">Of {totalCount} Questions</p>
          </div>
        )}

        <div className="px-5 py-5 w-3/4 md:w-1/2 h-max bg-amber-500 rounded-lg shadow-xl flex flex-col gap-4 justify-center items-center md:my-8">
          <h3 className="text-4xl text-zinc-800 font-medium">Your Score</h3>
          <h1 className="text-6xl font-semibold text-zinc-800">{score}</h1>
          <p className="text-zinc-700 ">Of {totalCount} Questions</p>
        </div>
      </div>
      <button
        type="button"
        className="cursor-pointer px-10 py-3 text-lg rounded-lg bg-amber-500 text-zinc-800 hover:bg-amber-600 "
        onClick={reset}
      >
        Restart
      </button>
    </div>
  );
};

export default ResultView;
