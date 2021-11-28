import TicketList from "../../components/tickets/TicketList";
import { MongoClient } from "mongodb";

function AllTicketsPage(props) {
  return <TicketList tickets={props.tickets} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://daniel:daniel12345@cluster0.f3to2.mongodb.net/BugTracker?retryWrites=true&w=majority"
  );
  const db = client.db();

  const ticketsCollection = db.collection("tickets");

  const tickets = await ticketsCollection.find().toArray();

  client.close();

  return {
    props: {
      tickets: tickets.map((tickets) => ({
        title: tickets.title || null,
        description: tickets.description || null,
        status: tickets.status || null,
        importance: tickets.importance || null,
        date: tickets.date || null,
        targetDate: tickets.targetDate || null,
        id: tickets._id.toString() || null,
      })),
    },
    revalidate: false,
  };
}

export default AllTicketsPage;
