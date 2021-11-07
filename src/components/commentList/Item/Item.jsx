import React from 'react';
import classes from './Item.module.css';
import { useDispatch } from 'react-redux';
import { deleteCommentActionCreator } from '../../../store/reducers/commentsReducer';

const Item = ( { comment } ) => {

	const dispatch = useDispatch();

	const clickHandler = () => {
		dispatch( deleteCommentActionCreator( comment.id ) );
	}

	return (
		<li className={ classes.item }>
			<div className={ classes.title }>
				<div className={ classes.name }>
					{ comment.commentAuthor }
				</div>
				<div className={ classes.date }>
					{ comment.commentTime }
				</div>
			</div>

			<div className={ classes.text }>
				{ comment.commentText }
			</div>

			<div className={ classes.delete_wrapper }>
				<button className={ classes.delete } onClick={ clickHandler }>X</button>
			</div>
		</li>
	);
};

export default Item;
