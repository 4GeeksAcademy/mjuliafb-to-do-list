import React, { useState } from "react";

const Home = () => {
	const [input, setInput] = useState("");
	const [list, setList] = useState([]);

	const validateInput = (e) => {
		setInput(e.target.value);
		if (inputValue.trim() !== "") return Alert("Por favor rellenar input")
	};

	const addItem = (e) => {
		if (e.keyCode === 13) {
			if (input.trim() !== "") {
				setList([...list, input]);
				setInput("");
			} else {
				alert("Por favor, rellena el input antes de añadirlo");
			}
		}
	};

	const deleteItem = (indexItem) => {
		setList((prevState) =>
			prevState.filter((elemento, index) => index !== indexItem)
		);
	};

	return (
		<div className="text-center">
			<h1 className="mt-5"> To do list</h1>
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

