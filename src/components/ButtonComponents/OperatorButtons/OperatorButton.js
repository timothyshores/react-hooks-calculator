import React from "react";

const OperatorButton = ({ char, value }) => {
	const clickHandler = () => console.log(`char ${char}, value ${value}`);
	return (
		<>
			<button value={value} onClick={clickHandler}>
				{char}
			</button>
		</>
	);
};

export default OperatorButton;
