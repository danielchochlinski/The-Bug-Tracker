import { useState, useEffect, Fragment } from "react";
import CommentItem from "./CommentItem";
import AddCommentForm from "./AddCommentForm";
import Card from "../ui/Card";

function CommentsList(props) {
  async function addCommentHandler(enteredCommentData) {
    const response = await fetch("/api/postComment", {
      method: "POST",
      body: JSON.stringify(enteredCommentData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setShowAddComment(false);
  }

  const [comments, setComments] = useState([]);
  const [showAddComment, setShowAddComment] = useState(false);

  const showAddCommentHandler = () => {
    setShowAddComment(true);
  };
  const hideAddCommentHandler = () => {
    setShowAddComment(false);
  };

  useEffect(() => {
    async function getComments() {
      const response = await fetch("/api/fetchComments");
      const data = await response.json();
      const filteredComments = console.log(data);
      setComments(data);
    }
    getComments();
  }, []);

  return (
    <Fragment>
      <Card>
        <div>Comments for this ticket</div>
        <table>
          <thead>
            <tr>
              <td>Author</td>
              <td>Message</td>
              <td>Date</td>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <CommentItem
                key={comment._id}
                commenter={comment.commenter}
                message={comment.message}
                date={comment.date}
              />
            ))}
          </tbody>
        </table>
        <button onClick={showAddCommentHandler}>Add Comment</button>
      </Card>
      {showAddComment && (
        <AddCommentForm
          onClose={hideAddCommentHandler}
          onAddComment={addCommentHandler}
        />
      )}
    </Fragment>
  );
}

export default CommentsList;
