import React from "react";

const NumberButton = ({ number, id }) => {
	const clickHandler = () => console.log(number);
	return (
		<>
			<button className="number-button" id={id} onClick={clickHandler}>
				{number}
			</button>
		</>
	);
};

export default NumberButton;
