import { Fragment } from "react";
import TicketList from "../../components/tickets/TicketList";
import ChartsList from "../../components/ui/ChartsList";
import PieChartTickets from "../../components/tickets/PieChartTickets";
import BarChartTickets from "../../components/tickets/BarChartTickets";
import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../lib/db";

function AllTicketsPage(props) {
  return (
    <Fragment>
      <TicketList tickets={props.tickets} />
      <ChartsList>
        <PieChartTickets tickets={props.tickets} />
        <BarChartTickets tickets={props.tickets} />
      </ChartsList>
    </Fragment>
  );
}
export async function getServerSideProps(context) {
  const client = await connectToDatabase()
  
  const db = client.db();

  const ticketsCollection = db.collection("tickets");

  const tickets = await ticketsCollection.find().toArray();

  client.close();

  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      tickets: tickets.map((tickets) => ({
        title: tickets.title || null,
        projectId: tickets.projectId || null,
        personel: tickets.personel || null,
        description: tickets.description || null,
        status: tickets.status || null,
        importance: tickets.importance || null,
        type: tickets.type || null,
        date: tickets.date || null,
        targetDate: tickets.targetDate || null,
        id: tickets._id.toString() || null,
      })),
    },
  };
}

// export async function getStaticProps() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://daniel:daniel12345@cluster0.f3to2.mongodb.net/BugTracker?retryWrites=true&w=majority"
//   );
//   const db = client.db();

//   const ticketsCollection = db.collection("tickets");

//   const tickets = await ticketsCollection.find().toArray();

//   client.close();

//   return {
//     props: {
//       tickets: tickets.map((tickets) => ({
//         title: tickets.title || null,
//         projectId: tickets.projectId || null,
//         personel: tickets.personel || null,
//         description: tickets.description || null,
//         status: tickets.status || null,
//         importance: tickets.importance || null,
//         type: tickets.type || null,
//         date: tickets.date || null,
//         targetDate: tickets.targetDate || null,
//         id: tickets._id.toString() || null,
//       })),
//     },
//     revalidate: 30,
//   };
// }

export default AllTicketsPage;
