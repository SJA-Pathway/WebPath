import { paths } from "@/data";

export async function GET() {

    return Response.json(paths)
}
