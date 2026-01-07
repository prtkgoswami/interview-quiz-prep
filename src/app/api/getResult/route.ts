import { QUESTION_MAP, Topic } from "@/assets";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type UserAnswer = {
  id: string;
  selectedIndex: number;
  correctIndex: number;
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

  let score = 0;
  for (const { selectedIndex, correctIndex } of answers) {
    if (selectedIndex < 0) continue;

    if (selectedIndex === correctIndex) {
      score++;
    }
  }

  return NextResponse.json(
    { data: {
        score: score,
    } },
    { status: 200 }
  );
}
