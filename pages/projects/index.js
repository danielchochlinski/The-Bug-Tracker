import ProjectList from "../../components/projects/ProjectList";
import { MongoClient } from "mongodb";

function AllProjectsPage(props) {
  return <ProjectList projects={props.projects} />;
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
    revalidate: false
  };
}

export default AllProjectsPage;
