import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, description, status, importance, date, targetDate } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://daniel:daniel12345@cluster0.f3to2.mongodb.net/BugTracker?retryWrites=true&w=majority"
    );
    const db = client.db();
    const commentsCollection = db.collection("comments");
    const result = await commentsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Comment inserted successfully" });
  }
}

export default handler;