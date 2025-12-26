"use client";
import { Topic } from "@/assets";
import { useRouter } from "next/navigation";

const TOPICS: {
  title: string;
  key: Topic;
  enabled: boolean;
}[] = [
  {
    title: "Javascript",
    key: "js",
    enabled: true,
  },
  {
    title: "Typescript",
    key: "ts",
    enabled: true,
  },
  {
    title: "React JS",
    key: "reactJs",
    enabled: true,
  },
  {
    title: "Next JS",
    key: "nextJs",
    enabled: true,
  },
  {
    title: "Express JS",
    key: "expressJs",
    enabled: true,
  },
  {
    title: "Node JS",
    key: "nodeJs",
    enabled: true,
  },
  {
    title: "Mongo DB",
    key: "mongoDb",
    enabled: true,
  },
  {
    title: "Mixed Find-the-Bug",
    key: "mix_find_the_bug",
    enabled: true,
  },
  {
    title: "Frontend System Design",
    key: "fe_system_design",
    enabled: true,
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
        <h1 className="text-6xl text-amber-500 font-semibold">Tech Quiz</h1>
        <h3 className="text-2xl text-zinc-400 font-light">
          MCQ Style Interview Prep
        </h3>
      </header>

      <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center md:mt-20 md:w-[80%] border border-zinc-500 rounded-lg p-5">
        {TOPICS.map(({ title, key, enabled }) => (
          <button
            key={key}
            className="cursor-pointer w-full py-5 md:w-46 md:h-30 flex justify-center items-center bg-amber-500 text-zinc-800 hover:bg-amber-400 md:text-lg md:font-semibold rounded-lg border-2 border-amber-600 disabled:bg-zinc-500 disabled:border-zinc-300 disabled:text-zinc-50 disabled:cursor-not-allowed"
            onClick={() => goTo(`/quiz/?topic=${key}`)}
            disabled={!enabled}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
