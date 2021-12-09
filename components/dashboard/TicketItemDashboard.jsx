import { useRouter } from "next/router";

function TicketItemDashboard(props) {
  const router = useRouter();

  const openTicketHandler = () => {
    router.push("/tickets/" + props.title);
  };

  return (
    <tr onClick={openTicketHandler}>
      <td>{props.title}</td>
      <td>{props.projectId}</td>
      <td>{props.personel}</td>
      <td>{props.status}</td>
      <td>{props.importance}</td>
      <td>{props.type}</td>
      <td>{props.date}</td>
    </tr>
  );
}

export default TicketItemDashboard;
