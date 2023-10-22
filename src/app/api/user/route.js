import { NextRequest, NextResponse } from "next/server";
import { mongoClient } from "../config";

export async function createUserInDB(uid) {
    
    const db =  await mongoClient.connect();
    const userCollect =  db.db('user_data').collection('users').insertOne({
        id:String(uid)
    }); 
    const goalUserCreate =  db.db('user_data').collection('goals').insertOne({
        goals: {},
        id:String(uid)
    });
    
}

export async function getUserInDB(uid) {
   
    const db = await mongoClient.connect();
    if (uid!==null) {
        const userCollect =  db.db('user_data').collection('users').findOne({
            id: uid
        });
        console.log(userCollect)
        if (userCollect!==null) {
            responseData.data = userCollect;
        }
    } 
    
    return NextResponse.json(responseData)
}
