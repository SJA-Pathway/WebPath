import { getPath } from "@/data"


export async function GET(req: Request, 
    { params } : {params: Promise<{pathSlug: string}>}) {
    
    const { pathSlug } = await params

    const paths = getPath(pathSlug)

    if (!paths) return Response.json(false)

    return Response.json(paths)
}