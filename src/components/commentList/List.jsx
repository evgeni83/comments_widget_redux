import React from 'react';
import Item from './Item/Item';
import classes from './List.module.css';
import { useSelector } from 'react-redux';

const List = () => {

	const comments = useSelector( state => state?.comments );

	return (
		comments.length > 0
			?
			<ul className={ classes.list }>
				{
					comments.map( comment => (
						<Item
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

export default List;
