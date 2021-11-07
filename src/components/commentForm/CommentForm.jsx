import React from 'react';
import Input from './Input/Input';
import Textarea from './Textarea/Textarea';
import Button from './Button/Button';
import classes from './CommentForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentActionCreator } from '../../store/reducers/commentsReducer';
import { changeCommentAuthorActionCreator, changeCommentTextActionCreator } from '../../store/reducers/inputReducer';

const CommentForm = () => {
	const dispatch = useDispatch();
	const input = useSelector( state => state?.input );

	const submitHandler = event => {
		event.preventDefault();
		dispatch( addCommentActionCreator( input.commentAuthor, input.commentText ) );
		dispatch( changeCommentAuthorActionCreator( '' ) );
		dispatch( changeCommentTextActionCreator( '' ) );
	};

	return (
		<form className={ classes.form } onSubmit={ submitHandler }>
			<Input/>
			<Textarea/>
			<Button/>
		</form>
	);
};

export default CommentForm;
