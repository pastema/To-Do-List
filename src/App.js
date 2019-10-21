import React from 'react';
import './App.css';
// import Todo from './components/Todo';
import TodoList from './components/TodoList';
class App extends React.Component {


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <TodoList/>
      </header>
    </div>
  );
}
}

export default App;
