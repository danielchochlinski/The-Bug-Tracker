import { MongoClient } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://daniel:daniel12345@cluster0.f3to2.mongodb.net/BugTracker?retryWrites=true&w=majority"
  );
  const db = client.db();

  const commentsCollection = db.collection("comments");

  const comments = await commentsCollection.find().toArray();
  res.json(comments);
  console.log(comments);

  client.close();
}
export default handler;
