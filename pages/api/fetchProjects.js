import { MongoClient } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://daniel:daniel12345@cluster0.f3to2.mongodb.net/BugTracker?retryWrites=true&w=majority"
  );
  const db = client.db();

  const projectsCollection = db.collection("projects");

  const projects = await projectsCollection.find().toArray();
  res.json(projects);
  console.log(projects);

  client.close();
}
export default handler;
