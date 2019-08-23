import React from "react";

const OperatorButton = ({ char, value }) => {
	const clickHandler = () => console.log(`char ${char}, value ${value}`);
	return (
		<div>
			<button className="operator-button" value={value} onClick={clickHandler}>
				{char}
			</button>
		</div>
	);
};

export default OperatorButton;
