import React from "react";
import CommentFormInput from "./commentFormInput/commentFormInput";
import CommentFormTextarea from "./commentFormTextarea/commentFormTextarea";
import CommentFormButton from "./commentFormButton/commentFormButton";
import style from "./commentForm.module.css";

const CommentForm = props => {
  const {
    comments,
    handleCommentAuthor,
    handleCommentText,
    addComment
  } = props;

  return (
    <form
      className={style.commentForm}
      onSubmit={ev => {
        addComment(ev, comments);
      }}
    >
      <CommentFormInput handleCommentAuthor={handleCommentAuthor} />
      <CommentFormTextarea handleCommentText={handleCommentText} />
      <CommentFormButton />
    </form>
  );
};

export default CommentForm;
