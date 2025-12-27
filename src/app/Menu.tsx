"use client";
import { Topic } from "@/assets";
import { useRouter } from "next/navigation";

const TOPICS: {
  title: string;
  key: Topic;
  disabled?: boolean;
}[] = [
  {
    title: "Javascript",
    key: "js",
  },
  {
    title: "Typescript",
    key: "ts",
  },
  {
    title: "React JS",
    key: "reactJs",
  },
  {
    title: "Next JS",
    key: "nextJs",
  },
  {
    title: "Express JS",
    key: "expressJs",
  },
  {
    title: "Node JS",
    key: "nodeJs",
  },
  {
    title: "Mongo DB",
    key: "mongoDb",
  },
  {
    title: "Mixed Find-the-Bug",
    key: "mix_find_the_bug",
  },
  {
    title: "Frontend System Design",
    key: "fe_system_design",
  },
];

const Menu = () => {
  const router = useRouter();

  const goTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col gap-4 min-h-screen px-5 items-center bg-zinc-900 font-sans">
      <header className="px-8 py-8">
        <h1 className="text-4xl md:text-6xl text-amber-500 font-semibold text-center">Tech Quiz</h1>
        <h3 className="text-lg md:text-2xl text-zinc-400 font-light">
          MCQ Style Interview Prep
        </h3>
      </header>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:border border-zinc-500 rounded-lg md:p-5">
        {TOPICS.map((topic) => (
          <button
            key={topic.key}
            className="cursor-pointer w-full py-8 md:py-0 md:w-45 md:h-36 flex justify-center items-center bg-amber-500 text-zinc-800 hover:bg-amber-400 md:text-lg font-semibold rounded-lg border-2 border-amber-600 disabled:bg-zinc-500 disabled:border-zinc-300 disabled:text-zinc-50 disabled:cursor-not-allowed"
            onClick={() => goTo(`/quiz/?topic=${topic.key}`)}
            disabled={topic.disabled}
          >
            {topic.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
