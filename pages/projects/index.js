import { Fragment } from "react";

import ProjectList from "../../components/projects/ProjectList";
import ChartsList from "../../components/ui/ChartsList"
import PieChartProjects from "../../components/projects/PieChartProjects"
import BarChartProjects from "../../components/projects/BarChartProjects"
import { connectToDatabase } from "../../lib/db";
import {getSession} from "next-auth/client"


function AllProjectsPage(props) {
  return (
    <Fragment>
      <ProjectList projects={props.projects} />
      <ChartsList>
        <PieChartProjects projects={props.projects} />
        <BarChartProjects projects={props.projects} />
      </ChartsList>
    </Fragment>
  );
}



export async function getServerSideProps(context) {
  const client = await connectToDatabase();
  const db = client.db();

  const projectsCollection = db.collection("projects");

  const projects = await projectsCollection.find().toArray();

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
      projects: projects.map((project) => ({
        title: project.title,
        description: project.description,
        status: project.status,
        importance: project.importance,
        date: project.date,
        targetDate: project.targetDate,
        id: project._id.toString(),
      })),
    },
  };
}


export default AllProjectsPage;
