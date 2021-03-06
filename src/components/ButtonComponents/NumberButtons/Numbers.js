// import React, { useState } from "react";
import React from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";
//import any components needed

const Numbers = ({ setNum }) => {
	// const [numberState, setNumberState] = useState(numbers);

	return (
		<>
			<div>
				{numbers.slice(0, 3).map(number => (
					<NumberButton number={number} key={number} setNum={setNum} />
				))}
			</div>
			<div>
				{numbers.slice(3, 6).map(number => (
					<NumberButton number={number} key={number} setNum={setNum} />
				))}
			</div>
			<div>
				{numbers.slice(6, 9).map(number => (
					<NumberButton number={number} key={number} setNum={setNum} />
				))}
			</div>
			<div>
				<NumberButton
					id="zero"
					number={numbers[9]}
					key={numbers[9]}
					setNum={setNum}
				/>
				<NumberButton number={numbers[10]} key={numbers[10]} setNum={setNum} />
			</div>
		</>
	);
};

export default Numbers;
