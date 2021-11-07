import React from 'react';
import classes from './Input.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeCommentAuthorActionCreator } from '../../../store/reducers/inputReducer';

const Input = () => {
	const dispatch = useDispatch();
	const value = useSelector( state => state?.input.commentAuthor );

	const handleInput = event => {
		event.preventDefault();
		dispatch( changeCommentAuthorActionCreator( event.target.value ) );
	};

	return (
		<>
			<label className={ classes.label } htmlFor="commentAuthor">Имя</label>
			<input className={ classes.input }
				   type="text"
				   name="commentAuthor"
				   id="commentAuthor"
				   placeholder="Ваше имя"
				   value={ value }
				   onInput={ handleInput }
				   required
			/>
		</>
	);
};

export default Input;
