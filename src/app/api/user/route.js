import { NextRequest, NextResponse } from "next/server";
import { mongoClient } from "../config";

export async function POST(request) {
    const data = await request.json()
    if (!data.id) {
        return NextResponse.json({ data: {
            
        } }, { status: 400}); 
    }
    const db = await mongoClient.connect();
    const userCollect = await db.db('user_data').collection('users').insertOne({
        ...data
    });
    const goalUserCreate = await db.db('user_data').collection('goals').insertOne({
        goals: {},
        ...data
    });
    
    return NextResponse.json({ data: {
        success: userCollect.acknowledged
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
        userId = String(searchParams.get('id'));
    }

    const db = await mongoClient.connect();
    if (userId) {
        const userCollect = await db.db('user_data').collection('users').findOne({
            id: userId
        });
        console.log(userCollect)
        if (userCollect) {
            responseData.data = userCollect;
            status = 200;
        }
    } else {
        status = 400;
    }
    
    return NextResponse.json(responseData, { status: status })
}
