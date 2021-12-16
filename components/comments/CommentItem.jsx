function CommentItem (props) {
    return (
      <tr>
        <td>{props.commenter}</td>
        <td>{props.message}</td>
        <td>{props.date}</td>
      </tr>
    );
};
export default CommentItem