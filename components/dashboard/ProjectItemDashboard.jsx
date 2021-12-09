
import { useRouter } from "next/router";

function ProjectItemDashboard(props) {
  const router = useRouter();

  const openProjectHandler = () => {
    router.push("/projects/" + props.title);
  };

  return (
    <tr onClick={openProjectHandler}>
      <td>{props.title}</td>
      <td>{props.status}</td>
      <td>{props.importance}</td>
      <td>{props.targetDate}</td>
    </tr>
  );
}

export default ProjectItemDashboard;
