import { getTopic } from "@/data";

export async function GET(req: Request, { params }: { params: Promise<{ pathSlug: string; topicSlug: string }> }) {
    const { pathSlug, topicSlug } = await params

    const topics = getTopic(pathSlug, topicSlug)

    if (!topics) return Response.json(false)

    return Response.json(topics)
}