export const handleCommentAuthor = ev => {
  return {
    type: "CHANGE_COMMENT_AUTHOR",
    value: ev.target.value
  }
}

export const handleCommentText = ev => {
  return {
    type: "CHANGE_COMMENT_TEXT",
    value: ev.target.value
  }
}

export const addComment = (ev, comments) => {
  ev.preventDefault();  
  const commentAuthor = ev.target.commentAuthor.value;
  const commentText = ev.target.commentText.value;
  ev.target.commentAuthor.value = "";
  ev.target.commentText.value = "";
  return {
    type: "ADD_COMMENT",
    id: comments.length,
    commentAuthor,
    commentTime: new Date().toLocaleString(),
    commentText
  };
};

export const deleteComment = (id, length) => {
  return {
    type: "DELETE_COMMENT",
    id,
    newId: length
  };
};
