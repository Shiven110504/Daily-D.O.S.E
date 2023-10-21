import { NextRequest, NextResponse } from "next/server";
import { mongoClient } from "../config";
import { ObjectId } from "mongodb";

export async function POST(request) {
    const data = await request.json();
    const userId = data.id;
    const category = data.category;
    const goal = data.goal;
    const db = await mongoClient.connect();
    const goalAdjustments = {};
    goalAdjustments[category] = goal;
    const goalCollect = await db.db('user_data').collection('goals').findOneAndUpdate({
        _id: new ObjectId(userId)
    }, {
            $set: goalAdjustments
    });
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
        userId = searchParams.get('id')
    }
    const db = await mongoClient.connect();
    if (userId) {
        const goalCollect = await db.db('user_data').collection('goals').findOne({
            _id: new ObjectId(userId)
        });
        if (goalCollect) {
            responseData.data = goalCollect;
        }
    } else {
        status = 400;
    }
    
    return NextResponse.json(responseData, { status: status })
}
