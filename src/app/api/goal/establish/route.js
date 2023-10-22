import { NextRequest, NextResponse } from "next/server";

// prevtask AND finalgoal MUST be real numbers!
// duration is time elapsed in seconds.
function uploadNextTask(prevtask, prevchange, finalgoal, duration, outcome ) {
    let coefficient;
    let dx = prevchange;
    switch (outcome) {
        case "unfinished":
            coefficient = [0.5, 0.9];
            break;
        case "negative":
            coefficient = [0.25, 0.5];
            break;
        case "positive":
            coefficient = [1, 1.5];
            break;
        default:
            coefficient = [0, 0];
        }
    const proportion = duration / (24 * 60 * 60);
    const proposition = prevtask + (dx * (coefficient[0] + ((coefficient[1] - coefficient[0]) * (1 - proportion))));
    const metGoal = (prevtask - finalgoal > 0 && proposition < finalgoal) || (prevtask - finalgoal < 0 && proposition > finalgoal)
    return metGoal ? finalgoal : proposition

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