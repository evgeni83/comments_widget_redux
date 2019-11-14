import React from "react";
// import Comment from "../comment";
import CommentListItem from "./commentListItem/commentListItem";
import style from "./commentList.module.css";

const CommentList = (props) => {

  const { comments, deleteComment } = props;  
  
  return (
    <ul className={style.commentsList}>

      {comments.map((comment, i) => {        
        return (
          <CommentListItem
            comment={comment}
            key={i}
            id={i}
            deleteComment={deleteComment}
            comments={comments}
          />
        );
      })}

    </ul>
  )
}

export default CommentList;