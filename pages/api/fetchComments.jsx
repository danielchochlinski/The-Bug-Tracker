import { connectToDatabase } from "../../lib/db";

async function handler(req, res) {
  const client = await connectToDatabase()
  const db = client.db();

  const commentsCollection = db.collection("comments");

  const comments = await commentsCollection.find().toArray();
  res.json(comments);
  console.log(comments);

  client.close();
}
export default handler;
