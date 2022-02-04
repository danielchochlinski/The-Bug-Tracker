import { useState, useEffect, Fragment, useContext } from "react";
import CommentItem from "./CommentItem";
import AddCommentForm from "./AddCommentForm";
import Card from "../../../ui/Card";
import classes from "./CommentList.module.css";
import NotificationContext from "../../../../store/notification-context";

function CommentsList(props) {
  const notificationCtx = useContext(NotificationContext);

  const [comments, setComments] = useState([]);
  const [showAddComment, setShowAddComment] = useState(false);

  async function addCommentHandler(enteredCommentData) {
    notificationCtx.showNotification({
      title: "Adding Comment",
      message: "Comment Is Being Added",
      status: "pending",
    });
    const response = await fetch("/api/postComment", {
      method: "POST",
      body: JSON.stringify(enteredCommentData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        notificationCtx.showNotification({
          title: "Order Sent",
          message: "Order on the way",
          status: "success",
        });
      });
    setShowAddComment(false);
  }

  const showAddCommentHandler = () => {
    setShowAddComment(true);
  };

  const hideAddCommentHandler = () => {
    setShowAddComment(false);
  };

  useEffect(() => {
    async function getComments() {
      const response = await fetch("/api/fetchComments");
      const comments = await response.json();
      const filteredComments = comments.filter(
        (comment) => comment.id === props.title
      );
      setComments(filteredComments);
    }
    getComments();
  }, []);

  return (
    <Fragment>
      <Card>
        <div className={classes.header}>Comments for this ticket</div>
        <div className={classes.commentList}>
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
        </div>
      </Card>
      {showAddComment && (
        <AddCommentForm
          commentId={props.title}
          onClose={hideAddCommentHandler}
          onAddComment={addCommentHandler}
        />
      )}
    </Fragment>
  );
}

export default CommentsList;
