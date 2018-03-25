import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import TodoItems from "./components/TodoItems";
// import './App.css';


class App extends Component {

  state = {
    items: []
  }


  // add items to the list 
  addItem = (e) => {
    e.preventDefault();
    // grab input from form
    const listItem = e.target.elements.listItem.value;

    // create the list item if there is an input and submitted
    if(listItem !== "") {

      const newItem = {
        text: listItem,
        key: Date.now()
      }

      let todos = this.state.items.slice();
      todos.push(newItem);

      this.setState({
        items: todos
      })
    }

    console.log(this.state.items);

  }

  createTodos = (item) => {
    return <li key={item.key}>{ item.text }</li>
  }

  render() {
    return (
      <div>
        <TodoList addItem={this.addItem} />
        <TodoItems loItems={this.state.items} createTodos={this.createTodos}/>
      </div>
    );
  }
}

export default App;
