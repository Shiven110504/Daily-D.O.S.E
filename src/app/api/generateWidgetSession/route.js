import { NextRequest, NextResponse } from "next/server";
import { terra } from "../config";
import { createUserInDB } from "../user/route";
import {getUserData} from "../health_data"

export async function GET(request) {
    let status = 400;
    let url;
    createUserInDB();
    const resp = await terra.generateWidgetSession({
        referenceID: "setuprunning-testing-cMBP69U4Z5",
        language: "en",
        authSuccessRedirectUrl: "http://localhost:3000",
        authFailureRedirectUrl: "http://localhost:3000"
    }).then((s) => {
        console.log(s);
        url = s.url;
      });
    return NextResponse.json( { status: status, url: url })
}