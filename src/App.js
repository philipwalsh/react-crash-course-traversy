import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import Header from './components/layout/Header';
import About from './components/pages/About';
//import uuid from 'uuid';
// import {v4 as uuid} from 'uuid'
import axios from 'axios'

class App extends Component {

  // state = {
  //   todos: [
  //     {id: 1, title: "take out the trash", completed: false},
  //     {id: 2, title: "walk the dog", completed: true},
  //     {id: 3, title: "dinner at bdubs", completed: false}
  //   ]
    state = {
      todos: []
    }

    componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res=> this.setState({ todos: res.data }));
    }
  //toggle the completed status
  markComplete = (id) =>{
    //console.log (`hello nice world ${id}`)
    this.setState({ todos: this.state.todos.map (todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})

  }

  delTodo = (id) => {
    //console.log(`see u later ${id}`)
    //this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}) )
  }

  addTodo = (title) => {
    //console.log(`new todo sent: ${title}`);
    // const newTodo = {
    //   id: uuid(),
    //   title,
    //   completed: false
    // }
    // this.setState({ todos : [...this.state.todos, newTodo]})
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => this.setState({ todos : [...this.state.todos, res.data]}))
  }


  render() {
    //console.log(this.state.todos)
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={ props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos 
              todos={this.state.todos} 
              markComplete={this.markComplete} 
              delTodo={this.delTodo}/>
            </React.Fragment>
          ) } />
          <Route path="/about" component={About} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
