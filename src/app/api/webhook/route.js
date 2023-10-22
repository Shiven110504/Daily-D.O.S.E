import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
    // receive data from Terra via webhook.
    const data = await request.json()
    console.log(data)
    return NextResponse.json({ data: data }, { status: 200}); 
}