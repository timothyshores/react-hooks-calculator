import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";
//import any components needed

const Numbers = () => {
	const [numberState, setNumberState] = useState(numbers);
	console.log(numbers);
	return (
		<div>
			{/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
			{numbers.map(number => (
				<NumberButton number={number} />
			))}
		</div>
	);
};

export default Numbers;
