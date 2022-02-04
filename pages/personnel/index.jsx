import { Fragment } from "react";
import { connectToDatabase } from "../../lib/db";
import {getSession} from "next-auth/client"
import PersonnelList from "../../components/personnel/PersonnelList";

function AllPersonnel(props) {
  return (
    <Fragment>
      <PersonnelList personnel={props.personnel} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const client = await connectToDatabase();
  const db = client.db();

  const personnelCollection = db.collection("personnel");

  const personnel = await personnelCollection.find().toArray();

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
      personnel: personnel.map((personnel) => ({
        name: personnel.name || null,
        title: personnel.title || null,
        description: personnel.description || null,
        image: personnel.image || null,
        languages: personnel.languages || null,
      })),
    },
  };
}

export default AllPersonnel;
