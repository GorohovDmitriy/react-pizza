import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
	return (
		<ContentLoader
			className="pizza-block"
			speed={2}
			width={280}
			height={460}
			viewBox="0 0 280 460"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<circle cx="134" cy="133" r="127" />
			<rect x="2" y="277" rx="0" ry="0" width="280" height="29" />
			<rect x="0" y="317" rx="6" ry="6" width="280" height="93" />
			<rect x="1" y="421" rx="3" ry="3" width="104" height="34" />
			<rect x="142" y="420" rx="21" ry="21" width="132" height="34" />
		</ContentLoader>

	)
}

export default LoadingBlock;
