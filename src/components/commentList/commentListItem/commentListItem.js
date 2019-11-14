import React from "react";
import style from "./commentListItem.module.css";

const CommentListItem = props => {
  const { comment, deleteComment, comments } = props;

  console.log(comments);
  

  return (
    <li className={style.commentListItem}>
      <div className={style.commentListItem__commentTitle}>
        <div className={style.commentListItem__commentAuthorName}>
          {comment.commentAuthor}
        </div>
        <div className={style.commentListItem__commentDate}>
          {comment.commentTime}
        </div>
      </div>

      <div className={style.commentListItem__commentText}>
        {comment.commentText}
      </div>

      <div className={style.commentListItem__deleteButtonContainer}>
        <button
          className={style.commentListItem__deleteButton}
          onClick={ev => {
            deleteComment(comment.id, comments.length);
          }}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default CommentListItem;
