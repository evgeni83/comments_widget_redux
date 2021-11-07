const initialState = localStorage.hasOwnProperty( 'comments' ) ?
	[ ...JSON.parse( localStorage.getItem( 'comments' ) ) ] :
	[];

const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

export const commentsReducer = ( state = initialState, action ) => {
	let newState;

	switch ( action.type ) {
		case ADD_COMMENT:
			newState = [ ...state, action.payload ];
			localStorage.setItem( 'comments', JSON.stringify( newState ) );
			return newState;

		case DELETE_COMMENT:
			newState = [ ...state.filter( comment => comment.id !== action.payload ) ];
			localStorage.setItem( 'comments', JSON.stringify( newState ) );
			return newState;

		default:
			return state;
	}
};

export const addCommentActionCreator = ( commentAuthor, commentText ) => ( {
	type: ADD_COMMENT,
	payload: {
		id: Date.now(),
		commentTime: new Date().toLocaleString(),
		commentAuthor,
		commentText,
	},
} );

export const deleteCommentActionCreator = id => ( {
	type: DELETE_COMMENT,
	payload: id,
} );

