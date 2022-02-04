import {connectToDatabase} from "../../lib/db"

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, description, status, importance, date, targetDate } = data;

    const client = await connectToDatabase()
    const db = client.db();
    const ticketsCollection = db.collection("tickets");
    const result = await ticketsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Ticket inserted successfully" });
  }
}

export default handler;
