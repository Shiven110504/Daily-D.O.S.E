import { terra } from "./config";
import { mongoClient } from "../config";


export function authenticateUser (user_id) { //get reference_id from Max

	auth_resp = terra.generate_authentication_url(
		reference_id="",
		resource="GARMIN",
		auth_success_redirect_url="https://success.url",
		auth_failure_redirect_url="https://failure.url",
	  ).get_parsed_response()
	  
	  return auth_resp;
	}


export async function getHealthData(userId) {
	const db = mongoClient.connect();
	const doc = await db.db('user_data').collection('users').findOne({_id: userId}); //get User-Id from 
	const USER_ID = doc._id;
	if (!USER_ID) {
		return;
	}

export async function getUserData(USER_ID) {
// Get the nutrition data from start date to current time
	terra
    .getNutrition({ userId: USER_ID, startDate: new Date("2023-03-29"), endDate: new Date(), toWebhook: false })
    .then((p) => db.db("user_data").collection("health_history").insertOne({id: USER_ID, category: "Nutrition", data: p}))
    .catch((e) => console.log(e.status, e.message));
}