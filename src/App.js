import StepApp from "./Components/StepApp/StepSpp";
import TimeApp from "./Components/TimeApp/TimeApp";
import Accord from "./Components/Accordion/Accord";
import TipCalculator from "./Components/TipCalculator/TipCalculator";
import { useState } from "react";
// import PracticeApp from "./Components/Code/PracticeApp";

export default function App() {
	const [el, setEl] = useState(null);

	function handleSetEl(el) {
		setEl((val) => el);
	}
	return (
		<>
			<div className='menus'>
				<Button el={el} onclick={handleSetEl}>
					StepApp
				</Button>
				<Button el={el} onclick={handleSetEl}>
					TimeApp
				</Button>
				<Button el={el} onclick={handleSetEl}>
					Accordion
				</Button>
				<Button el={el} onclick={handleSetEl}>
					TipCalculator
				</Button>
			</div>
			{el === "StepApp" && <StepApp />}
			{el === "TimeApp" && <TimeApp />}
			{el === "Accordion" && <Accord />}
			{el === "TipCalculator" && <TipCalculator />}
		</>
	);
}

function Button({ onclick, children, el }) {
	return (
		<button
			className='btn'
			onClick={(e) =>
				el === children ? onclick(null) : onclick(children)
			}>
			{children}
		</button>
	);
}
