import { connectToDatabase } from "../../lib/db";

async function handler(req, res) {
  const client = await connectToDatabase()
  const db = client.db();

  const personnelCollection = db.collection("personnel");

  const personnel = await personnelCollection.find().toArray();
  res.json(personnel);
  console.log(personnel);

  client.close();
}
export default handler;
