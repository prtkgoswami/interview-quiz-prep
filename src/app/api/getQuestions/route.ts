import { QUESTION_MAP, Topic } from "@/assets";
import { getRandomItems } from "@/utils/random";
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
    const result = subset.map(q => {
        const {answer, ...rest} = q;
        return rest;
    })
    return NextResponse.json(
        {data: result},
        {status: 200}
    )
}