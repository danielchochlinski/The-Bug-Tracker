import { connectToDatabase } from "../../lib/db";

async function handler(req, res) {
  const client = await connectToDatabase()
  const db = client.db();

  const projectsCollection = db.collection("projects");

  const projects = await projectsCollection.find().toArray();
  res.json(projects);
  console.log(projects);

  client.close();
}
export default handler;
