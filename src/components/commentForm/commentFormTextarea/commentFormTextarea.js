import React from "react";
import style from "./commentFormTextarea.module.css";

const CommentFormTextarea = props => {
  const { handleCommentText } = props;

  return (
    <label className={style.commentFormTextarea__label} htmlFor="commentText">
      Комментарий
      <textarea
        className={style.commentFormTextarea__textarea}
        type="text"
        name="commentText"
        id="commentText"
        placeholder="Ваш комментарий"
        onChange={ev => handleCommentText(ev)}
        required
      />
    </label>
  );
};

export default CommentFormTextarea;
