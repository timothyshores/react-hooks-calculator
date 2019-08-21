import React from "react";

const NumberButton = ({ number }) => {
	const clickHandler = () => console.log(number);
	return (
		<>
			<button onClick={clickHandler}>{number}</button>
		</>
	);
};

export default NumberButton;
