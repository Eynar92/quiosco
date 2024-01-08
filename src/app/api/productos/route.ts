import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const products = await prisma.producto.findMany();
    return NextResponse.json(products);
}