const initialState = { commentAuthor: '', commentText: '' };

const CHANGE_COMMENT_AUTHOR = 'CHANGE_COMMENT_AUTHOR';
const CHANGE_COMMENT_TEXT = 'CHANGE_COMMENT_TEXT';

export const inputReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case CHANGE_COMMENT_AUTHOR:
			return { ...state, commentAuthor: action.payload };
		case CHANGE_COMMENT_TEXT:
			return { ...state, commentText: action.payload };
		default:
			return state;
	}
};

export const changeCommentAuthorActionCreator = value => ( {
	type: CHANGE_COMMENT_AUTHOR,
	payload: value,
} );

export const changeCommentTextActionCreator = value => ( {
	type: CHANGE_COMMENT_TEXT,
	payload: value,
} );

