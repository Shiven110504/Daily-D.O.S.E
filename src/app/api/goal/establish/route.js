import { NextRequest, NextResponse } from "next/server";
import goal_types from "./goal-types.json" assert { type: 'json' };
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

function refEmbedField(doc, embedField) {
    const directory = embedField.split('.');
    let r = doc
    for (const i of directory) {
        if (r === null) {
            return 0;
        }
        r = r[i];
    }
    return r ?? 0;
}

export async function POST(request) {
    // insert datapoint. tell me what it influences.
    const data = await request.json();
    if (!data.id || !data.type) {
        console.log('missing field');
        return NextResponse.json({  }, { status: 400})
    }
    const possible_goals = goal_types[data.type]
    if (!possible_goals) {
        console.log('type is not fitness, hydration, or whatever.');
        
        return NextResponse.json({  }, { status: 400}) 
    }
    if (!data.metric || !possible_goals[data.metric]) {
        console.log('we didn\'t cover that metric.');
        return NextResponse.json({  }, { status: 400}); 
    }
    if (!['unfinished', 'positive', 'negative'].includes(data.outcome)) {
        console.log('what kind of outcome are you giving me?');
        return NextResponse.json({  }, { status: 400}); 
    }

    const important_metrics = possible_goals[data.metric];
    const getSum = (doc) => important_metrics.map((metric) => refEmbedField(doc, metric)).reduce((a, b) => a + b ,0);
    const translate = {
        "fitness": "activity",
        "hydration": "nutrition",
        "nutrition": "nutrition",
        "sleep": "sleep"
    };

    const db = await mongoClient.connect(); 
    let prevValue;
    const prevGoal = await db.db('health_history').collection('goal_history').findOne({
        id: data.id,
        metric: data.metric
    }, {sort:{$natural:-1}}); // the last goal related to this metric.
    if (!prevGoal) {
        const prevEntry = await db.db('health_history').collection('health_history').findOne({
            id: data.id,
            type: translate[data.type] ?? 'pickles'
        }, {sort:{$natural:-1}}); // no goal, calculate goal based on last datpoint.
        prevValue = getSum(prevEntry)
    } else {
        prevValue = prevGoal.value
    }
    const curGoals = await db.db('user_data').collection('goals').findOne({
        id: data.id});
    let prevChange = 0;
    // stgoal looks like something like the following:
    // {
        // goalmetric1: 3,
        // goalmetric2: 4,
        // ...
    // }
    if (curGoals && curGoals.stgoal && curGoals.stgoal[data.metric]) {
        prevChange = curGoals.stgoal[data.metric] - prevValue;

    } 
    
    
    const newGoal = uploadNextTask(prevValue, prevChange, curGoals.lt[data.metric], 12 * 60 * 60, data.outcome);
    const newEntry = await db.db('health_history').collection('goal_history').insertOne({
        id: data.id,
        value: newGoal,
        metric: data.metric
    });
    const updatedCurGoal = await db.db('user_data').collection('goals').updateOne({
        id: data.id
    }, {
        $set: {"goals.stgoal": newGoal}
    })
    const fnalMsg = `Please give me a simple instruction that encourages users to meet the following metric in an actionable format: ${newEntry} @ ${data.metric}`
    const chatGpt = `Try to achieve ${newEntry} @ ${data.metric} today.`
    return NextResponse.json({ data: {message : chatGpt} }, { status: 200}); 
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