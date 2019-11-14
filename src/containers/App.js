import React from "react";
import CommentForm from "../components/commentForm/commentForm";
import CommentList from "../components/commentList/commentList";
import { connect } from "react-redux";
import {
  handleCommentAuthor,
  handleCommentText,
  addComment,
  deleteComment
} from "../actions/index";

import style from "./App.css";

let App = props => {
  const {
    handleCommentAuthor,
    handleCommentText,
    comments,
    addComment,
    deleteComment
  } = props;

  return (
    <div className={style.appWrapper}>
      <CommentForm
        comments={comments}
        handleCommentAuthor={handleCommentAuthor}
        handleCommentText={handleCommentText}
        addComment={addComment}
      />
      <CommentList comments={comments} deleteComment={deleteComment} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCommentAuthor: ev => dispatch(handleCommentAuthor(ev)),
    handleCommentText: ev => dispatch(handleCommentText(ev)),
    addComment: (commentAuthor, commentText) =>
      dispatch(addComment(commentAuthor, commentText)),
    deleteComment: id => dispatch(deleteComment(id))
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
