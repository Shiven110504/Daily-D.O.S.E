import Terra from "terra-api";
const { MongoClient } = require("mongodb");
const uri =
`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@${process.env.MONGODB_URL}?retryWrites=true&w=majority`;

// The MongoClient is the object that references the connection to our
// datastore (Atlas, for example)
export const mongoClient = new MongoClient(uri);

export const terra = new Terra(process.env.TERRA_DEV_ID ?? "", process.env.TERRA_API_KEY ?? "", process.env.TERRA_WEBHOOK_SECRET ?? "");
