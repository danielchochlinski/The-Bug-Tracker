import { connectToDatabase } from "../../lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, description, status, importance, date, targetDate } = data;

    const client = await connectToDatabase()
    const db = client.db();
    const commentsCollection = db.collection("comments");
    const result = await commentsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Comment inserted successfully" });
  }
}

export default handler;
