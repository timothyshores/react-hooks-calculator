import React from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

const Specials = () => {
	// const [specialState, setSpecialState] = useState();

	return (
		<div>
			{specials.map(special => (
				<SpecialButton special={special} key={special} />
			))}
		</div>
	);
};

export default Specials;
