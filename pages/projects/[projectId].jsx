import { connectToDatabase } from "../../lib/db";
import ProjectDetails from "../../components/projects/ProjectDetails/ProjectDetails";

function ProjectDetailPage(props) {
  // const router = useRouter();

  // router.query.projectId;
  //send request to backend API to fetch item with this id
  return (
    <ProjectDetails
      key={props.projectData._id}
      title={props.projectData.title}
      description={props.projectData.description}
      status={props.projectData.status}
      importance={props.projectData.importance}
      date={props.projectData.date}
      targetDate={props.projectData.targetDate}
      id={props.projectData._id}
    />
  );
}

export async function getStaticPaths() {
  const client = await connectToDatabase()
  const db = client.db();

  const projectsCollection = db.collection("projects");

  const projects = await projectsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: projects.map((project) => ({
      params: { projectId: project.title.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const projectId = context.params.projectId;

  const client = await connectToDatabase()
  const db = client.db();

  const projectsCollection = db.collection("projects");

  const selectedProject = await projectsCollection.findOne({
    title: (projectId),
  });

  return {
    props: {
      projectData: {
        id: selectedProject._id.toString(),
        title: selectedProject.title,
        description: selectedProject.description,
        status: selectedProject.status,
        importance: selectedProject.importance,
        date: selectedProject.date,
        targetDate: selectedProject.targetDate,
      },
    },
  };
}
export default ProjectDetailPage;
