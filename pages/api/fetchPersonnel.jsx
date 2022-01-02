import { MongoClient } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://daniel:daniel12345@cluster0.f3to2.mongodb.net/BugTracker?retryWrites=true&w=majority"
  );
  const db = client.db();

  const personnelCollection = db.collection("personnel");

  const personnel = await personnelCollection.find().toArray();
  res.json(personnel);
  console.log(personnel);

  client.close();
}
export default handler;
