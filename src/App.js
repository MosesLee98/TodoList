import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import TodoItems from "./components/TodoItems";
import './App.css';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import Radium from 'radium';

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

  deleteItemDay = (key) => {
    var filteredItems = this.state.itemsDay.filter(function (itemsDay) {
      return (itemsDay.key !== key);
    });

    let monthTodos = this.state.itemsMonth.slice();
    let yearTodos = this.state.itemsYear.slice();

    this.setState({
      itemsDay: filteredItems,
      itemsMonth: monthTodos,
      itemsYear: yearTodos
    })
  }

  deleteItemMonth = (key) => {
    var filteredItems = this.state.itemsMonth.filter(function (itemsMonth) {
      return (itemsMonth.key !== key);
    });

    let dayTodos = this.state.itemsDay.slice();
    let yearTodos = this.state.itemsYear.slice();

    this.setState({
      itemsDay: dayTodos,
      itemsMonth: filteredItems,
      itemsYear: yearTodos
    })
  }

  deleteItemYear = (key) => {
    var filteredItems = this.state.itemsYear.filter(function (itemsYear) {
      return (itemsYear.key !== key);
    });

    let dayTodos = this.state.itemsDay.slice();
    let monthTodos = this.state.itemsMonth.slice();

    this.setState({
      itemsDay: dayTodos,
      itemsMonth: monthTodos,
      itemsYear: filteredItems
    })
  }

  createTodosDay = (item) => {
    return <li onClick={() => this.deleteItemDay(item.key)}
                key={item.key} 
                style={{
                  fontSize: '14px',
                  color: '#333',
                  backgroundColor: 'rgba(221, 238, 255, 0.5)',
                  padding: '15px',
                  marginBottom: '15px',
                  borderRadius: '5px',
                  listStyle: 'none',
                  'li:hover': {
                    backgroundColor: '#FFFFFF',
                  }
                }}>
            { item.text }
          </li>
  }

  createTodosMonth = (item) => {
    return <li onClick={() => this.deleteItemMonth(item.key)}
                key={item.key} 
                style={{
                  fontSize: '14px',
                  color: '#333',
                  backgroundColor: 'rgba(221, 238, 255, 0.5)',
                  padding: '15px',
                  marginBottom: '15px',
                  borderRadius: '5px',
                  listStyle: 'none'}}>
            { item.text }
          </li>
  }

  createTodosYear = (item) => {
    return <li onClick={() => this.deleteItemYear(item.key)}
                key={item.key} 
                style={{
                  fontSize: '14px',
                  color: '#333',
                  backgroundColor: 'rgba(221, 238, 255, 0.5)',
                  padding: '15px',
                  marginBottom: '15px',
                  borderRadius: '5px',
                  listStyle: 'none'}}>
            { item.text }
          </li>
  }

  render() {
    return (
        <Grid>
          <Row>
            <div className="container-title">
              <h1>TODOLIST</h1>
            </div>
          </Row>
          <Row>
            <div>
              <h4>Remove tasks by clicking them!</h4>
            </div>
          </Row>
          <Row>
            <Col md={4}>
              <div>
                <h2>Day</h2>
                <TodoList addItem={this.addItemDay} />
                <TodoItems loItems={this.state.itemsDay} createTodos={this.createTodosDay}/>
              </div>
            </Col>

            <Col md={4}>
              <div>
              <h2>Month</h2>
                <TodoList addItem={this.addItemMonth} />
                <TodoItems loItems={this.state.itemsMonth} createTodos={this.createTodosMonth}/>
              </div>
            </Col>

            <Col md={4}>
              <div>
                <h2>Year</h2>
                <TodoList addItem={this.addItemYear} />
                <TodoItems loItems={this.state.itemsYear} createTodos={this.createTodosYear}/>
              </div>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default App;
