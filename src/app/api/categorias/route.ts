import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const categories = await prisma.categoria.findMany({
        include: {
            productos: true,
        }
    });
    return NextResponse.json(categories);
}