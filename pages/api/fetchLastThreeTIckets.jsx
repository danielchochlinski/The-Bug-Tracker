import { MongoClient } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://daniel:daniel12345@cluster0.f3to2.mongodb.net/BugTracker?retryWrites=true&w=majority"
  );
  const db = client.db();

  const ticketsCollection = db.collection("tickets");

  const tickets = ticketsCollection.find().limit(1).sort({$natural:-1})
  res.json(tickets);
  console.log(tickets);

  client.close();
}
export default handler;
