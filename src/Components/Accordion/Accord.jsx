import { useState } from "react";
import "./Accord.css";

const faq = [
	{
		title: "Where are the chairs assembled?",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus natus minus quasi in autem inventore.",
		id: 1,
		open: false,
	},
	{
		title: "How long do I have to return my chair?",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus natus minus quasi in autem inventore.",
		id: 2,
		open: false,
	},
	{
		title: "Do you ship to countries outside Africa?",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus natus minus quasi in autem inventore.",
		id: 3,
		open: false,
	},
];

export default function Accord() {
	const [questions, setQuestions] = useState(faq);

	function handleSetQuestions(id) {
		setQuestions((questions) =>
			questions.map((question) => {
				return question.id === id
					? { ...question, open: !question.open }
					: { ...question, open: false };
			})
		);
	}

	return (
		<div className='container '>
			{questions.map((items, i) => (
				<Question
					items={items}
					num={i}
					onclick={handleSetQuestions}
					key={i}
				/>
			))}
		</div>
	);
}

function Question({ onclick, items, num }) {
	// const [isOpen, setIsOpen] = useState(false);

	// function handleIsOpen(id) {
	// 	setIsOpen(!isOpen);
	// }

	return (
		<div className={`${items.open ? "accordion active" : "accordion"}`}>
			<div
				className={`${
					items.open
						? "question-container active"
						: "question-container"
				}`}
				onClick={() => onclick(items.id)}>
				<h1 className='number'>0{num + 1}</h1>
				<h3 className='question'>{items.title}</h3>
				<span className='btn'>{!items.open ? "+" : "-"}</span>
			</div>
			<div className='answer-container'>
				<p className='answer'>{items.text}</p>
			</div>
		</div>
	);
}
