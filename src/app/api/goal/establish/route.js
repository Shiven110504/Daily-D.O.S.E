import { NextRequest, NextResponse } from "next/server";

function uploadNextTask(prevtask, finalgoal, duration, outcome ) {

}

export async function POST(request) {
    // receive data from Terra via webhook.
    const data = await request.json();
    if (!data.id) {
        return NextResponse.json({  }, { status: 400})
    }
    const db = await mongoClient.connect();
    const prev = await db.db('health_history').collection('goal_history').findOne({
        id: data.id
    }, {sort:{$natural:-1}});

    return NextResponse.json({ data: data }, { status: 200}); 
}

export async function GET(request) {
    let userId;
    const url = request.url;
    const responseData = {data : null}
    const splitUrl = url.split('?');
    if (splitUrl.length > 0) {
        const searchParams = new URLSearchParams(splitUrl[1]);
        userId = searchParams.get('id')
    }
    const db = await mongoClient.connect();
    const prev = await db.db('health_history').collection('goal_history').findOne({
        id: userId
    }, {sort:{$natural:-1}});
    return NextResponse.json({ ...prev }, { status: 200 });    
}