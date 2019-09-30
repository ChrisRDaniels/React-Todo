import React from 'react';



const todolistData = [
  {
    name: 'Bananas',
    id: 1,
    purchased: false
  },
  {
    name: 'Apples',
    id: 2,
    purchased: false
  },
  {
    name: 'Vegetables',
    id: 3,
    purchased: false
  },
  {
    name: 'Pizza',
    id: 4,
    purchased: false
  },
  {
    name: 'Chocolate',
    id: 5,
    purchased: false
  },
  {
    name: 'Energy Drinks',
    id: 6,
    purchased: true
  },

  {
    name: 'Hot Sauce',
    id: 7,
    purchased: true
  }

];

class App extends React.Component {
 constructor() {
   super();
   this.state = {
     name: 'Todo App',
     todolist: todolistData
   };

 }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
