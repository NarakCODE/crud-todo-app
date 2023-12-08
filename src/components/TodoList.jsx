import React, { useState } from 'react';
import Header from './Header';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		setTodos((prevTodos) => {
			const newTodos = [...prevTodos, todo];
			return newTodos;
		});
	};

	const removeTodo = (id) => {
		const removeTodoById = [...todos].filter((todo) => todo.id !== id);
		setTodos(removeTodoById);
	};

	return (
		<div>
			<Header title={'Your Note'} />
			<TodoForm onSubmit={addTodo} removeTodo={removeTodo} />

			<div className="grid grid-cols-1 gap-4 mt-10">
				{todos.length === 0 ? (
					<p className="text-center">No todo item</p>
				) : (
					<>
						{todos
							.slice()
							.reverse()
							.map((todo) => (
								<Todo todo={todo} key={todo.id} removeTodo={removeTodo} />
							))}
					</>
				)}
			</div>
		</div>
	);
};

export default TodoList;
