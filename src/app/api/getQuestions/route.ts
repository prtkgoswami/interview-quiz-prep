import { QUESTION_MAP, Topic } from "@/assets";
import { getRandomItems, shuffleArray, shuffleWithIndex } from "@/utils/random";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
    const topic = searchParams.get("topic") as Topic | null;

    if (!topic || !(topic in QUESTION_MAP)) {
        return NextResponse.json(
            {error: "Invalid or Missing Topic"},
            {status: 400}
        )
    }

    const questions = QUESTION_MAP[topic];
    const subset = getRandomItems(questions, 15);
    const selectedQuestions = subset.map(q => {
        const { shuffled, newCorrectIndex } = shuffleWithIndex(
            q.options,
            q.answer!
        );

        return {
            id: q.id,
            question: q.question,
            relatedCode: q.relatedCode,
            options: shuffled,
            correctIndex: newCorrectIndex
        };
    })

    return NextResponse.json(
        {data: selectedQuestions},
        {status: 200}
    )
}