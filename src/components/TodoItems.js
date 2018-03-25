import React from 'react';

const TodoItems = (props) => {

	const TodoList = props.loItems.map(props.createTodos);

   	return(
   		<ul className="theList">
   			{TodoList}
   		</ul>
   	);
}

export default TodoItems;