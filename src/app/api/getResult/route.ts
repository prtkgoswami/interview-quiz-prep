import { QUESTION_MAP, Topic } from "@/assets";
import { Question } from "@/types/question";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type UserAnswer = {
  id: string;
  ansIndex: number;
};

export async function POST(req: Request) {
  const reqData = await req.json();

  const topic = reqData.topic as Topic;
  const answers = reqData.answers as UserAnswer[];

  if (!topic || !(topic in QUESTION_MAP)) {
    return NextResponse.json(
      { error: "Invalid or missing topic" },
      { status: 400 }
    );
  }

  if (!Array.isArray(answers) || answers.length === 0) {
    return NextResponse.json(
      { error: "Invalid or missing answers" },
      { status: 400 }
    );
  }

  const questions = QUESTION_MAP[topic] as Question[];

  const questionsMap: Record<string, Question> = {};
  for (const q of questions) {
    questionsMap[q.id] = q;
  }

  let score = 0;
  const actualAnswers = []
  for (const { id, ansIndex } of answers) {
    const question = questionsMap[id];

    if (!question) continue; // invalid question id

    actualAnswers.push(question.answer)
    if (ansIndex < 0 || ansIndex >= question.options.length) continue;

    if (question.answer === ansIndex) {
      score++;
    }
  }

  return NextResponse.json(
    { data: {
        score: score,
        answers: actualAnswers
    } },
    { status: 200 }
  );
}
