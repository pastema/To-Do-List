import React from 'react';
import './App.css';

import TodoList from './components/TodoList';

class App extends React.Component {


    render(){
    return (
      <div className="App">
                <header className="App-header">
        <h1>TO DO LIST</h1>
        <TodoList/>
        </header>
      </div>
    );
  }
}

export default App;