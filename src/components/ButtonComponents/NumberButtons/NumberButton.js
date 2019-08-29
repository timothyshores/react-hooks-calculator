import React from "react";

const NumberButton = ({ number, id, setNum }) => {
	return (
		<>
			<button className="number-button" id={id} onClick={() => setNum(number)}>
				{number}
			</button>
		</>
	);
};

export default NumberButton;
