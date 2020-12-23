import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {id: 1, title: "take out the trash", completed: false},
      {id: 2, title: "walk the dog", completed: true},
      {id: 3, title: "dinner at bdubs", completed: false}
    ]
  }
  render() {
    //console.log(this.state.todos)
    return (
      <div className="App">
        <h1>hello react world!</h1>
        <Todos  todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
