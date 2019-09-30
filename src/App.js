import React from 'react';

// Importing TodoList and TodoForm

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    chore: "Wake Up",
    id: 1,
    completed: false
  },
  {
    chore: "Shower",
    id: 2,
    completed: false
  },
  {
    chore: "Brush Teeth",
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      chore: '',
      todo: todoData
    };
  }

  toggleItem = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addTodo = choreName => {
    const newChore= {
      chore: choreName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todo: [...this.state.todo, newChore]
    });
  };

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;