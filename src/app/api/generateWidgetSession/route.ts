import { NextRequest, NextResponse } from "next/server";
import { terra } from "../config";


export async function GET(request: NextRequest) {
    const resp = await terra.generateWidgetSession({
        referenceID: "HelloHarvard",
        language: "en",
        authSuccessRedirectUrl: "http://localhost:3000",
        authFailureRedirectUrl: "http://localhost:3000"
    })
    return NextResponse.json({ url: resp.url }, { status: 200}); 
}