import React, { useState } from "react";
import UnorderList from "./UnorderList";

const Home = () => {
	const [input, setInput] = useState("");
	const [list, setList] = useState([]);

	const validateInput = (e) => {
		setInput(e.target.value);
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
		<div className="container text-center">
			<h1 className="text-center mt-5"> To do list</h1>
			<input type="text" onChange={validateInput} value={input} onKeyDown={addItem} />
			<UnorderList list={list} deleteItem={deleteItem} />
		</div>
	);
};

export default Home;


