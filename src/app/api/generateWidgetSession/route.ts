import { NextRequest, NextResponse } from "next/server";
import Terra from "terra-api";

const terra = new Terra(process.env.TERRA_DEV_ID ?? "universityofmassachusettsamherst-testing-t9yVTx5Fvf", process.env.TERRA_API_KEY ?? "3cCdGaZEjDrEY9Xv9_tjUa34Pttk_b6v", process.env.TERRA_WEBHOOK_SECRET ?? "");

export async function GET(request: NextRequest) {
    const resp = await terra.generateWidgetSession({
        referenceID: "HelloHarvard",
        language: "en",
        authSuccessRedirectUrl: "http://localhost:3000",
        authFailureRedirectUrl: "http://localhost:3000"
    })
    return NextResponse.json({ url: resp.url }, { status: 200}); 
}