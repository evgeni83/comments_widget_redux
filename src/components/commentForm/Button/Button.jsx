import React from 'react';
import classes from './Button.module.css';

const Button = () => (
	<button className={ classes.button } type="submit">
		Добавить комментарий
	</button>
);

export default Button;
