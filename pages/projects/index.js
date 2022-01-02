import { Fragment } from "react";
import { MongoClient } from "mongodb";

import ProjectList from "../../components/projects/ProjectList";
import ChartsList from "../../components/ui/ChartsList"
import PieChartProjects from "../../components/projects/PieChartProjects"
import BarChartProjects from "../../components/projects/BarChartProjects"

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

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://daniel:daniel12345@cluster0.f3to2.mongodb.net/BugTracker?retryWrites=true&w=majority"
  );
  const db = client.db();

  const projectsCollection = db.collection("projects");

  const projects = await projectsCollection.find().toArray();

  client.close();

  return {
    props: {
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
    revalidate: false,
  };
}

export default AllProjectsPage;
