import { connectToDatabase } from "../../lib/db";

async function handler(req, res) {
  const client = await connectToDatabase()
  const db = client.db();

  const ticketsCollection = db.collection("tickets");

  const tickets = await ticketsCollection.find().toArray();
  res.json(tickets);
  console.log(tickets);

  client.close();
}
export default handler;
