import React from 'react';
import CommentForm from './CommentForm/CommentForm';
import CommentList from './CommentList/CommentList';
import classes from './App.module.css';

const App = () => (
	<div className={ classes.wrapper }>
		<CommentForm/>
		<CommentList/>
	</div>
);

export default App;
