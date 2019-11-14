const inputReducer = (
  state = { newCommentAuthor: "", newCommentText: "" },
  action
) => {
  switch (action.type) {
    case "CHANGE_COMMENT_AUTHOR":
      return {
        ...state,
        newCommentAuthor: action.value
      };
    case "CHANGE_COMMENT_TEXT":
      return {
        ...state,
        newCommentText: action.value
      };
    
    default:
      return state;
  }
};

export default inputReducer;
