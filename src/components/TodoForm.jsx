import { Button, Input } from '@material-tailwind/react';
import React, { useState } from 'react';

const TodoForm = (props) => {
	const [inputTitle, setInputTitle] = useState('');
	const [inputDesc, setInputDesc] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 1000),
			title: inputTitle,
			description: inputDesc
		});

		setInputTitle('');
		setInputDesc('');
	};

	return (
		<form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
			<Input
				className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
				labelProps={{
					className: 'hidden',
				}}
				placeholder="Add your title"
				type="text"
				value={inputTitle}
				name="text"
				onChange={(e) => setInputTitle(e.target.value)}
			/>
			<Input
				className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
				labelProps={{
					className: 'hidden',
				}}
				placeholder="Description"
				type="text"
				value={inputDesc}
				name="text"
				onChange={(e) => {
					setInputDesc(e.target.value);
				}}
			/>
			<Button onClick={handleSubmit}>Comfirm</Button>
		</form>
	);
};

export default TodoForm;
