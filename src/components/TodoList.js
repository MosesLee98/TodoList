import React from 'react';

const TodoList = (props) => {

	return(
		<form onSubmit={props.addItem}>
			<input type="text" name="listItem" placeholder="Enter Task"/>
			<button type="submit">Add</button>
		</form>
	);
	
}

export default TodoList;