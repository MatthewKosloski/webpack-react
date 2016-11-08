import React, { PropTypes } from 'react';
import s from './style';

function Greeting({ name }) {
	return(
		<div className={s.outer}>
			<div className={s.inner}>
				<p className={s.text}>Hola, {name}!</p>
			</div>
		</div>
	);
}

Greeting.propTypes = {
	name: PropTypes.string.isRequired
};

export default Greeting;