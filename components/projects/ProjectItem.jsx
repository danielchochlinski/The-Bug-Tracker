import Card from "../ui/Card";
import classes from "./ProjectItem.module.css";
import { useRouter } from "next/router";

function ProjectItem(props) {
  const router = useRouter();

  const openProjectHandler = () => {
    router.push("/projects/"  + props.title);
  };

  return (
    <tr className={classes.tr} onClick={openProjectHandler}>
      <td>{props.title}</td>
      <td>{props.status}</td>
      <td>{props.importance}</td>
      <td>{props.date}</td>
      <td>{props.targetDate}</td>
    </tr>
  );
}

export default ProjectItem;
