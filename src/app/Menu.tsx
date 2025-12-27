"use client";
import { Topic } from "@/assets";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type TopicItems = {
  title: string;
  key: Topic;
  disabled?: boolean;
  addedTS: number;
  lastAttempt?: {
    score?: number;
    timestamp?: number;
  };
  isNew?: boolean;
};

const TOPICS: Pick<TopicItems, "title" | "key" | "disabled" | "addedTS">[] = [
  {
    title: "Javascript",
    key: "js",
    addedTS: new Date("12/22/25").getTime(),
  },
  {
    title: "Typescript",
    key: "ts",
    addedTS: new Date("12/22/25").getTime(),
  },
  {
    title: "React JS",
    key: "reactJs",
    addedTS: new Date("12/22/25").getTime(),
  },
  {
    title: "Next JS",
    key: "nextJs",
    addedTS: new Date("12/22/25").getTime(),
  },
  {
    title: "Express JS",
    key: "expressJs",
    addedTS: new Date("12/22/25").getTime(),
  },
  {
    title: "Node JS",
    key: "nodeJs",
    addedTS: new Date("12/22/25").getTime(),
  },
  {
    title: "Mongo DB",
    key: "mongoDb",
    addedTS: new Date("12/22/25").getTime(),
  },
  {
    title: "Mixed Find-the-Bug",
    key: "mix_find_the_bug",
    addedTS: new Date("12/22/25").getTime(),
  },
  {
    title: "Frontend System Design",
    key: "fe_system_design",
    addedTS: new Date("12/26/25").getTime(),
  },
];

const Menu = () => {
  const [topics, setTopics] = useState<TopicItems[]>([]);
  const router = useRouter();

  const goTo = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    const topicList = TOPICS.map((topic) => {
      const storageKey = `previous-score-${topic.key}`;
      const temp = localStorage.getItem(storageKey) ?? "";
      const pastScores = temp ? JSON.parse(temp) : undefined;

      return {
        ...topic,
        isNew: Date.now() - topic.addedTS <= 5 * 1000 * 60 * 60 * 24,
        lastAttempt: pastScores
          ? {
              score: pastScores.score ?? undefined,
              timestamp: pastScores.timestamp ?? undefined,
            }
          : undefined,
      };
    });
    setTopics(topicList);
  }, []);

  return (
    <div className="flex flex-col gap-4 min-h-screen px-5 items-center bg-zinc-900 font-sans">
      <header className="px-8 py-8">
        <h1 className="text-4xl md:text-6xl text-amber-500 font-semibold text-center">
          Tech Quiz
        </h1>
        <h3 className="text-lg md:text-2xl text-zinc-400 font-light">
          MCQ Style Interview Prep
        </h3>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:border border-zinc-500 rounded-lg md:p-5">
        {topics.map((topic) => (
          <button
            key={topic.key}
            className="cursor-pointer w-full h-30 md:w-45 md:h-36 flex flex-col gap-3 justify-center items-center bg-amber-500 text-zinc-800 hover:bg-amber-400 md:text-lg font-semibold rounded-lg border-2 border-amber-600 disabled:bg-zinc-500 disabled:border-zinc-300 disabled:text-zinc-50 disabled:cursor-not-allowed relative"
            onClick={() => goTo(`/quiz/?topic=${topic.key}`)}
            disabled={topic.disabled}
          >
            {topic.isNew && (
              <div className="text-xs text-gray-50 bg-red-500 px-1.5 py-1 w-max flex justify-center items-center absolute z-10 top-0 right-0 animate-pulse">
                NEW
              </div>
            )}
            <p>{topic.title}</p>
            {topic.lastAttempt && (
              <div className="bg-gray-800 p-2 rounded-md text-xs text-amber-400">
                {topic.lastAttempt.score && (
                  <p className="">
                    Score: {topic.lastAttempt.score}
                  </p>
                )}
                {topic.lastAttempt.timestamp && (
                  <p className="">
                    Attempt:{" "}
                    {new Date(topic.lastAttempt.timestamp).toLocaleDateString(
                      undefined,
                      {
                        year: "2-digit",
                        month: "numeric",
                        day: "numeric",
                      }
                    )}
                  </p>
                )}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
