import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { commentsReducer } from './reducers/commentsReducer';
import { inputReducer } from './reducers/inputReducer';

const mainReducer = combineReducers( {
	comments: commentsReducer,
	input: inputReducer,
} );

export const store = createStore( mainReducer, composeWithDevTools() );
