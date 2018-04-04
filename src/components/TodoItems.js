import React from 'react';
import './TodoItems.css';
import Radium from 'radium';

const TodoItems = (props) => {

	const TodoList = props.loItems.map(props.createTodos);

   	return(
   		<ul className="theList">
   			{TodoList}
   		</ul>
   	);
}

export default Radium(TodoItems);