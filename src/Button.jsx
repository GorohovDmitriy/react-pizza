import React from 'react';
import classnames from 'classnames';



export default function Button(props) {
	return (
		<div>
			<button className={classnames('button', {
				'button--outline': props.outline,
			})}>
				{props.children}
			</button>
		</div>
	)
}

