import { Fragment } from "react";
import { MongoClient } from "mongodb";

import PersonnelList from "../../components/personnel/PersonnelList";

function AllPersonnel(props) {
  return (
    <Fragment>
      <PersonnelList personnel={props.personnel}/>
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://daniel:daniel12345@cluster0.f3to2.mongodb.net/BugTracker?retryWrites=true&w=majority"
  );
  const db = client.db();

  const personnelCollection = db.collection("personnel");

  const personnel = await personnelCollection.find().toArray();

  client.close();

  return {
    props: {
      personnel: personnel.map((personnel) => ({
        name: personnel.name || null,
        title: personnel.title || null,
        description: personnel.description || null,
        image: personnel.image || null,
        languages: personnel.languages || null,

      })),
    },
    revalidate: 30,
  };
}

export default AllPersonnel;
