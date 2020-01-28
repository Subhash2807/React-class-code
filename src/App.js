import React from 'react';
import './App.css';
import Hello from './Components/Hello'

class App extends React.Component{
  state = {
    todos: [
      {title: 'get up', isCompleted: false},
      {title: 'Eat food', isCompleted: true},
      {title: 'Go to bed', isCompleted: true}
    ]
  }

  toggleCheck = (title) => this.setState({todos: this.state.todos.map((v, i) => title === v.title ? 
      {title: v.title, isCompleted: !v.isCompleted} 
      : 
      v)})

  abc  = () => this.state.todos.map((v, i) => <Hello key={i} toggleCheck={this.toggleCheck} todo={v}  />)
  render(){
    return (
      <div className="App">
        {this.abc()}
      </div>
    );
  }
}

export default App;
