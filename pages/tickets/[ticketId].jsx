import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
import TicketDetails from "../../components/tickets/TicketDetails/TicketDetails"
function TicketDetailPage(props) {
  const router = useRouter();

  router.query.projectId;
  // send request to backend API to fetch item with this id
  return (
    <TicketDetails
      title={props.ticketData.title}
      projectId={props.ticketData.projectId}
      description={props.ticketData.description}
      personel={props.ticketData.personel}
      status={props.ticketData.status}
      importance={props.ticketData.importance}
      type={props.ticketData.type}
      date={props.ticketData.date}
      targetDate={props.ticketData.targetDate}
      key={props.ticketData._id}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://daniel:daniel12345@cluster0.f3to2.mongodb.net/BugTracker?retryWrites=true&w=majority"
  );
  const db = client.db();

  const ticketsCollection = db.collection("tickets");

  const tickets = await ticketsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: tickets.map((ticket) => ({
      params: { ticketId: ticket.title.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const ticketId = context.params.ticketId;

  const client = await MongoClient.connect(
    "mongodb+srv://daniel:daniel12345@cluster0.f3to2.mongodb.net/BugTracker?retryWrites=true&w=majority"
  );
  const db = client.db();

  const ticketsCollection = db.collection("tickets");

  const selectedTicket = await ticketsCollection.findOne({
    title: (ticketId),
  });

  return {
    props: {
      ticketData: {
        id: selectedTicket._id.toString(),
        title: selectedTicket.title,
        projectId: selectedTicket.projectId,
        description: selectedTicket.description,
        personel: selectedTicket.personel,
        status: selectedTicket.status,
        importance: selectedTicket.importance,
        type: selectedTicket.type,
        date: selectedTicket.date,
        targetDate: selectedTicket.targetDate,
      },
    },
  };
}
export default TicketDetailPage;
