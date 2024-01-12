import React, { useState } from "react";

const Home = () => {
	const [input, setInput] = useState("");
	const [list, setList] = useState([]);

	const validateInput = (e) => {
		setInput(e.target.value);
	};

	const addItem = (e) => {
		if (e.key === 'Enter') {
			setList([...list, input]);
			setInput("");
		}
	};

	const deleteItem = (indexItem) => {
		setList((prevState) =>
			prevState.filter((elemento, index) => index !== indexItem)
		);
	};

	return (
		<div className="text-center">
			<h1 className="text-center mt-5"> To do list</h1>
			<input type="text" onChange={validateInput} value={input} onKeyDown={addItem} />
			<ul>
				{list.map((elemento, index) => (
					<li key={index}>
						{elemento} <i className="fa-solid fa-x" onClick={() => deleteItem(index)}></i>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;

