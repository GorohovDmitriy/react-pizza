import React from 'react';
import classnames from 'classnames';



export default function Button({ onClick, className, children, outline }) {
	return (
		<div>
			<button onClick={onClick}
				className={classnames('button', className, {
					'button--outline': outline,
				})}>
				{children}
			</button>
		</div>
	)
}

