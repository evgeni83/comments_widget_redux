import React from 'react';
import classes from './Textarea.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeCommentTextActionCreator } from '../../../store/reducers/inputReducer';

const Textarea = () => {
	const dispatch = useDispatch();
	const value = useSelector( state => state?.input.commentText );

	const handleInput = event => {
		event.preventDefault();
		dispatch( changeCommentTextActionCreator( event.target.value ) );
	};

	return (
		<>
			<label className={ classes.label } htmlFor="commentText">
				Комментарий
			</label>
			<textarea
				className={ classes.textarea }
				name="commentText"
				id="commentText"
				placeholder="Ваш комментарий"
				value={ value }
				onInput={ handleInput }
				required
			/>
		</>
	);
};

export default Textarea;
