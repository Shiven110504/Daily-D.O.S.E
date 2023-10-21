import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
    // receive data from Terra via webhook.
    const data = await request.json()

    adjustGoals = 
    console.log(data)
    return NextResponse.json({ data: data }, { status: 200}); 
}