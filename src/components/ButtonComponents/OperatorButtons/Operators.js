// import React, { useState } from "react";
import React from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

const Operators = () => {
	// const [operatorState, setOperatorState] = useState();

	return (
		<div>
			{operators.map(operator => (
				<OperatorButton
					key={operator.char}
					char={operator.char}
					value={operator.value}
				/>
			))}
		</div>
	);
};

export default Operators;
