import { useState } from "react";

export default function TimeApp() {
	// const [step, setStep] = useState(0);
	const [count, setCount] = useState(0);
	const [range, setRange] = useState(10);

	// function handleBackStep() {
	// 	setStep((step) => (step > 1 ? step - 1 : (step = 0)));
	// }

	// function handleFrontStep() {
	// 	setStep((step) => (step < 5 ? step + 1 : (step = 5)));
	// }

	const curDate = new Date();
	curDate.setDate(curDate.getDate() + count);

	function handleIncrement() {
		setCount((c) => c + +range);
		// console.log()
	}

	function handleDecrement() {
		setCount((count) => count - +range);
	}

	function handleReset() {
		setCount(0);
		setRange(10);
	}

	return (
		<div className='steps' style={{ textAlign: "center" }}>
			<div className='step' style={{ marginBlock: "30px" }}>
				<input
					type='range'
					min='1'
					max='10'
					onChange={(e) => setRange(e.target.value)}
				/>
				<span>{+range}</span>
				{/* <button onClick={handleBackStep}>-</button>
				<span>step {step}</span>
				<button onClick={handleFrontStep}>+</button> */}
			</div>
			<div className='count' style={{ marginBlock: "30px" }}>
				<button onClick={handleDecrement}>-</button>
				<input
					type='number'
					value={count}
					onChange={(e) => setCount(Number(e.target.value))}
				/>
				<button onClick={handleIncrement}>+</button>
			</div>
			<h3 className='text' style={{ marginBlock: "30px" }}>
				{count < 0 && `${Math.abs(count)} day(s) ago was `}
				{count === 0 && "Today is "}
				{count > 0 && `${count} day(s) from today is `}
				{curDate.toDateString()}
			</h3>
			{count !== 0 ? (
				<div>
					<button onClick={handleReset}>Reset</button>
				</div>
			) : (
				""
			)}
		</div>
	);
}
