import { useState } from "react";

export default function TipCalculator() {
	const [bill, setBill] = useState(0);
	const [myTip, setMyTip] = useState(0);
	const [friendTip, setFriendTip] = useState(0);

	function handleMyTip(val) {
		setMyTip((tip) => +val);
	}
	function handleFriendTip(val) {
		setFriendTip((tip) => +val);
	}
	let totalTip = (Number(myTip) + Number(friendTip)) / 2;
	const total = Number(bill) + totalTip;

	function handleReset() {
		setBill(0);
		setMyTip(0);
		setFriendTip(0);
	}

	return (
		<div className='steps'>
			<BillInput bill={bill} setBill={setBill} />

			<SelectInput tip={myTip} onchange={handleMyTip}>
				<p>How did you like the service?</p>
			</SelectInput>

			<SelectInput tip={friendTip} onchange={handleFriendTip}>
				<p>How did your friend like the service?</p>
			</SelectInput>

			<Output total={total} totalTip={totalTip} bill={bill} />

			<Reset onclick={handleReset} />
		</div>
	);
}

function BillInput({ bill, setBill }) {
	return (
		<div>
			<p>How much was the bill? {bill}</p>
			<input
				type='number'
				value={bill}
				onChange={(e) => setBill((bill) => e.target.value)}
			/>
		</div>
	);
}

function SelectInput({ children, onchange, tip }) {
	return (
		<div>
			{tip}
			{children}
			<select value={tip} onChange={(e) => onchange(e.target.value)}>
				<option value='0'>Dissatisfied (0%)</option>
				<option value='5'>It was okay (5%)</option>
				<option value='10'>It was good (10%)</option>
				<option value='20'>Absolutely amazing (20%)</option>
			</select>
		</div>
	);
}

function Output({ total, totalTip, bill }) {
	return (
		<p>
			You pay ${total} (${bill} + ${totalTip} tip)
		</p>
	);
}

function Reset({ onclick }) {
	return <button onClick={onclick}>Reset</button>;
}
