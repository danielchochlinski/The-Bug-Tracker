import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://daniel:daniel12345@cluster0.f3to2.mongodb.net/BugTracker?retryWrites=true&w=majority"
    );
    const db = client.db();
    const projectsCollection = db.collection("projects");
    const result = await projectsCollection.find().toArray();
    console.log(result);
    client.close();
    res.status(201).json({ message: "Projects Fetched" });
  }
}
export default handler;
