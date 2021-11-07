import React from 'react';
import CommentForm from './CommentForm/CommentForm';
import List from './CommentList/List';
import classes from './App.module.css';

const App = () => (
	<div className={ classes.wrapper }>
		<CommentForm/>
		<List/>
	</div>
);

export default App;
