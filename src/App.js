import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import TodoItems from "./components/TodoItems";
import './App.css';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

class App extends Component {

  state = {
    itemsDay: [],
    itemsMonth: [],
    itemsYear: []
  }


  // add items to the TODAY list 
  addItemDay = (e) => {
    e.preventDefault();
    // grab input from form
    const listItem = e.target.elements.listItem.value;

    // create the list item if there is an input and submitted
    if(listItem !== "") {

      const newItem = {
        text: listItem,
        key: Date.now()
      }

      let newTodos = this.state.itemsDay.slice();
      newTodos.push(newItem);

      let monthTodos = this.state.itemsMonth.slice();
      let yearTodos = this.state.itemsYear.slice();

      this.setState({
        itemsDay: newTodos,
        itemsMonth: monthTodos,
        itemsYear: yearTodos
      })
    }
    console.log(this.state.items);
  }

  // add items to the MONTH list 
  addItemMonth = (e) => {
    e.preventDefault();
    // grab input from form
    const listItem = e.target.elements.listItem.value;

    // create the list item if there is an input and submitted
    if(listItem !== "") {

      const newItem = {
        text: listItem,
        key: Date.now()
      }

      let newTodos = this.state.itemsMonth.slice();
      newTodos.push(newItem);

      let dayTodos = this.state.itemsDay.slice();
      let yearTodos = this.state.itemsYear.slice();

      this.setState({
        itemsDay: dayTodos,
        itemsMonth: newTodos,
        itemsYear: yearTodos
      })
    }
    console.log(this.state.items);
  }

  // add items to the YEAR list 
  addItemYear = (e) => {
    e.preventDefault();
    // grab input from form
    const listItem = e.target.elements.listItem.value;

    // create the list item if there is an input and submitted
    if(listItem !== "") {

      const newItem = {
        text: listItem,
        key: Date.now()
      }

      let newTodos = this.state.itemsYear.slice();
      newTodos.push(newItem);

      let monthTodos = this.state.itemsMonth.slice();
      let dayTodos = this.state.itemsDay.slice();

      this.setState({
        itemsDay: dayTodos,
        itemsMonth: monthTodos,
        itemsYear: newTodos
      })
    }
    console.log(this.state.items);
  }

  // findDay = () => {
  //   let d = new Date();
  //   return d.getDate();
  // }

  createTodos = (item) => {
    return <li key={item.key}>{ item.text }</li>
  }

  render() {
    return (
        <Grid className="fluid">
          <Row>
            <div className="container-title">
              <h1>TODOLIST</h1>
            </div>
          </Row>
          <Row className="show-grid">
            <Col md={4}>
              <TodoList addItem={this.addItemDay} />
              <TodoItems loItems={this.state.itemsDay} createTodos={this.createTodos}/>
            </Col>

            <Col md={4}>
              <TodoList addItem={this.addItemMonth} />
              <TodoItems loItems={this.state.itemsMonth} createTodos={this.createTodos}/>
            </Col>

            <Col md={4}>
              <TodoList addItem={this.addItemYear} />
              <TodoItems loItems={this.state.itemsYear} createTodos={this.createTodos}/>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default App;
