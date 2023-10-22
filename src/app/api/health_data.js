import { terra } from "./config";

export async function getUserData(USER_ID) {
// Get the nutrition data from start date to current time
	terra
    .getNutrition({ userId: USER_ID, startDate: new Date("2023-03-29"), endDate: new Date(), toWebhook: false })
    .then((p) => db.db("user_data").collection("health_history").insertOne({id: USER_ID, category: "Nutrition", data: p}))
    .catch((e) => console.log(e.status, e.message));
}