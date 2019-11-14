const commentsReducer = (state = [], action) => {
  let newState;

  switch (action.type) {
    case "ADD_COMMENT":
      newState = state.concat({
        id: action.id,
        commentAuthor: action.commentAuthor,
        commentTime: action.commentTime,
        commentText: action.commentText
      });
      localStorage.setItem("comments", JSON.stringify(newState));
      return newState;

    case "DELETE_COMMENT":
      newState = state.filter(comment => comment.id !== action.id);

      newState.forEach((comment, i) => {
        comment.id = i;
      });

      localStorage.setItem("comments", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

export default commentsReducer;
