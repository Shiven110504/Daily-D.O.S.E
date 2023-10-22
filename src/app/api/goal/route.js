import { NextRequest, NextResponse } from "next/server";
import { mongoClient } from "../config";

export async function POST(request) {
    const data = await request.json();
    const userId = String(data.id);
    const category = data.category;
    const goal = data.goal;
    const db = await mongoClient.connect();
    const goalAdjustments = {};
    goalAdjustments[`goals.${category}`] = goal;
    console.log(goalAdjustments);
    console.log(goal);
    const goalCollect = await db.db('user_data').collection('goals').updateOne({
        id: userId
    }, {
            $set: goalAdjustments
    });
    console.log(goalCollect);
    return NextResponse.json({ data: {
        success: goalCollect.acknowledged
    } }, { status: 200}); 
}

export async function GET(request) {
    let status = 404;
    let userId;
    const url = request.url;
    const responseData = {data : null}
    const splitUrl = url.split('?');
    if (splitUrl.length > 0) {
        const searchParams = new URLSearchParams(splitUrl[1]);
        userId = String(searchParams.get('id'))
    }
    const db = await mongoClient.connect();
    if (userId) {
        const goalCollect = await db.db('user_data').collection('goals').findOne({
            id: userId
        });
        if (goalCollect) {
            responseData.data = goalCollect;
        }
    } else {
        status = 400;
    }
    
    return NextResponse.json(responseData, { status: status })
}
