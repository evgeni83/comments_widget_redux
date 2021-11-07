import React from 'react';
import CommentListItem from './CommentListItem/CommentListItem';
import classes from './CommentList.module.css';
import { useSelector } from 'react-redux';

const CommentList = () => {

	const comments = useSelector( state => state?.comments );

	return (
		comments.length > 0
			?
			<ul className={ classes.list }>
				{
					comments.map( comment => (
						<CommentListItem
							key={ comment.id }
							comment={ comment }
							id={ comment.id }
						/>
					) )
				}
			</ul>
			:
			<p className={ classes.list }>Комментариев нет</p>
	);
};

export default CommentList;
