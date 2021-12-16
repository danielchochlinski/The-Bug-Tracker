import { useRouter } from "next/router";

function TicketForProjectDetail(props) {
  const router = useRouter();

  const openTicketHandler = () => {
    router.push("/tickets/" + props.title);
  };

  return (
    <tr onClick={openTicketHandler}>
      <td>{props.title}</td>
      <td>{props.status}</td>
      <td>{props.importance}</td>
      <td>{props.type}</td>
    </tr>
  );
}

export default TicketForProjectDetail;
