import { terra } from "./config";
import { NextRequest, NextResponse } from "next/server";
import { mongoClient } from "../config";
import { ObjectId } from "mongodb";

export function authenticateUser (user_id) { //get reference_id from Max
	auth_resp = terra.generate_authentication_url(
		reference_id="",
		resource="GARMIN",
		auth_success_redirect_url="https://success.url",
		auth_failure_redirect_url="https://failure.url",
	  ).get_parsed_response()
	  
	  return auth_resp;
	}

export function getHealthData(user_id) {
	const USER_ID = user_id //get User-Id from 

// Get the nutrition data from start date to current time
	terra
    .getNutrition({ userId: USER_ID, startDate: new Date("2023-03-29"), endDate: new Date(), toWebhook: false })
    .then((p) => console.log(p))
    .catch((e) => console.log(e.status, e.message));
}