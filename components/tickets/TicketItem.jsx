import { useRouter } from "next/router";

function TicketItem(props) {
  const router = useRouter();

  const openTicketHandler = () => {
    router.push("/tickets/" + props.id);
  };

  return (
    <tr onClick={openTicketHandler}>
      <td>{props.title}</td>
      <td>{props.description}</td>
      <td>{props.status}</td>
      <td>{props.importance}</td>
      <td>{props.date}</td>
      <td>{props.dueDate}</td>
    </tr>
  );
}

export default TicketItem;
