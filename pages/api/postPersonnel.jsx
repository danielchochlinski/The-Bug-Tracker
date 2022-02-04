import { connectToDatabase } from "../../lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await connectToDatabase()
    const db = client.db();
    const personnelCollection = db.collection("personnel");
    const result = await personnelCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Personnel inserted successfully" });
  }
}

export default handler;
