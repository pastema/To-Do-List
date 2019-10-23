import React, {Component} from 'react';
import TodoInput from './TodoInput'
import Todos from './Todos'
import "./Todo.css"
import TodoResource from '../../api/TodoResource';

export default class TodoWrapper extends Component {

  componentDidMount() {
    TodoResource.getAll()
      .then(res => res.json())
      .then(res => {
        console.log("todos res:", res._embedded.todos);
        this.props.refreshTodos( res._embedded.todos)
      })
  }

  addNewTodo = newTodoContent => {
    console.log("addNewTodo "+newTodoContent);
    if(newTodoContent) {
      this.props.createNewTodo(newTodoContent);
    }
  };

  patchCheckBoxStatus = (status,id) => {
    console.log("patchCheckBoxStatus "+status+" "+id);
    console.log("http://localhost:6969/api/todos/"+id+"");
    this.props.patchNewTodo(status,id);
  };

  render() {
    return (
      <div className="todo-wrapper">
        <TodoInput onNewTodoAdded={this.addNewTodo}/>
        <Todos todos={this.props.todos} getCheckboxStatus={this.patchCheckBoxStatus}/>
      </div>
    )
  }
}