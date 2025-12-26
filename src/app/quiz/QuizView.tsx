import { Topic } from "@/assets";
import useQuiz from "@/hooks/useQuiz";
import QuestionView from "./QuestionView";
import ResultView from "./ResultView";

const TOPIC_TITLES: Record<Topic, string> = {
  expressJs: "Express JS",
  nodeJs: "Node JS",
  mongoDb: "Mongo DB",
  js: "Javascript",
  ts: "Typescript",
  reactJs: "React JS",
  nextJs: "Next JS",
  fe_system_design: "Frontend System Design",
  mix_find_the_bug: "Mixed Find-the-Bug",
};

const QuizView = ({ topic }: { topic: Topic }) => {
  const {
    isActive,
    isFetching,
    isLoadingResults,
    currentQuestion,
    currentAnswer,
    activeQIndex,
    error,
    hasNext,
    hasPrev,
    percentComplete,
    isEnded,
    score,
    questionsCount,
    currentCorrectAnswer,
    startQuiz,
    endQuiz,
    next,
    prev,
    addAnswer,
    reset,
  } = useQuiz(topic);

  if (!isEnded && !isActive && !isFetching) {
    return (
      <div className="flex flex-col gap-4 min-h-screen items-center bg-zinc-900 font-sans">
        <header className="px-5 py-4 flex justify-start w-full">
          <h2 className="text-3xl font-extralight text-zinc-100">Quiz</h2>
        </header>
        <main className="flex-1 flex flex-col gap-8 w-full justify-center items-center">
          <h1 className="text-4xl text-zinc-200 text-center leading-relaxed">
            Testing on{" "}
            <span className="text-amber-500">{TOPIC_TITLES[topic]}</span>.<br />
            Ready?
          </h1>
          <button
            className="cursor-pointer px-10 py-4 rounded-lg text-xl bg-green-600 hover:bg-green-700 text-zinc-200 border border-zinc-400"
            onClick={startQuiz}
          >
            Start Quiz
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 min-h-screen items-center bg-zinc-900 font-sans">
      <header className="px-5 py-4 flex justify-start w-full">
        <h2 className="text-3xl font-extralight text-zinc-100">Quiz</h2>
      </header>
      <main
        className={`flex-1 flex flex-col gap-8 w-full ${
          isFetching ?? "justify-center"
        } items-center pb-8`}
      >
        {isFetching && (
          <h1 className="text-4xl text-zinc-200 text-center leading-relaxed">
            Fetching Questions{" "}
            <span className="w-2 h-2 inline-block ml-2 rounded-full bg-amber-500 animate-bounce" />
            <span className="w-2 h-2 inline-block ml-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.2s]" />
            <span className="w-2 h-2 inline-block ml-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.4s]" />
          </h1>
        )}
        {isLoadingResults && (
          <h1 className="text-4xl text-zinc-200 text-center leading-relaxed">
            Calculating Results{" "}
            <span className="w-2 h-2 inline-block ml-2 rounded-full bg-amber-500 animate-bounce" />
            <span className="w-2 h-2 inline-block ml-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.2s]" />
            <span className="w-2 h-2 inline-block ml-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.4s]" />
          </h1>
        )}
        {isActive && (
          <QuestionView
            currentQuestion={currentQuestion}
            currentAnswer={currentAnswer}
            currentQIndex={activeQIndex}
            hasNext={hasNext}
            hasPrev={hasPrev}
            percentComplete={percentComplete}
            addAnswer={addAnswer}
            endQuiz={endQuiz}
            next={next}
            prev={prev}
          />
        )}
        {isEnded && !isLoadingResults && (
          <>
          <ResultView
            score={score}
            totalCount={questionsCount}
            topic={topic}
            reset={reset}
          />
          <QuestionView
            isResultView={true}
            currentQuestion={currentQuestion}
            currentAnswer={currentAnswer}
            hasNext={hasNext}
            hasPrev={hasPrev}
            percentComplete={percentComplete}
            correctAnswer={currentCorrectAnswer}
            next={next}
            prev={prev}
          />
          </>
        )}
      </main>
    </div>
  );
};

export default QuizView;