function TicketForProjectDetail(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.status}</td>
      <td>{props.importance}</td>
      <td>{props.type}</td>
    </tr>
  );
}

export default TicketForProjectDetail;
