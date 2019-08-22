import React from "react";

const SpecialButton = ({ special }) => {
	const clickHandler = () => console.log(special);
	return (
		<>
			<button onClick={clickHandler}>{special}</button>
		</>
	);
};

export default SpecialButton;
