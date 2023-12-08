import { IconButton } from '@material-tailwind/react';
import { Trash2 } from 'lucide-react';
import React from 'react';
import AnimationWrapper from '../animation/AnimationWrapper';

const Todo = ({ todo, removeTodo }) => {
	return (
		<AnimationWrapper className="p-3 border-2 border-black rounded-3xl shadow-[-5px_5px_0px_0px_rgba(1,10,10)] todo-row flex flex-col justify-between">
			<div>
				<h1 className="text-xl leading-6">{todo.title}</h1>
				<p className="mt-2 text-sm opacity-50 line-clamp-5">
					{todo.description}
				</p>
			</div>

			<div className="flex items-center justify-end">
				<IconButton variant="text" onClick={() => removeTodo(todo.id)}>
					<Trash2 size={18} />
				</IconButton>
			</div>
		</AnimationWrapper>
	);
};

export default Todo;
