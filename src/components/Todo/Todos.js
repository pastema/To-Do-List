import React, { Component } from 'react'
import TodoItem from "./TodoItem";
// import { Button , Checkbox  } from 'antd';

export default class Todos extends Component {

  state = {
    status: this.props.active,
  };

  changeStatus = (todoItem) => {
    this.props.getCheckboxStatus(todoItem.status, todoItem.id, todoItem.content);
    console.log("todoItem == ", todoItem)
  };
  
  // getActiveItems = (todoItem) => {
  //   console.log("getActiveItems");
  //   this.props.getActiveItems();
  // };


  activeItems = (e) => {
    e && e.preventDefault();
    const { status } = this.state;
    const isCompleted = status === 'completed' ;
    this.setState({status: isCompleted ? 'active': 'completed'})
    this.props.getActiveItems(isCompleted);
  };

  render() {
    const isCompleted = this.state.status === 'completed' ;
    const {todos} = this.props;
    return (
      <div className="todo-list">
        {todos.map((todo, i) =>
          <li key={i}>
           <TodoItem
             todo={todo}
             onChange={this.changeStatus}/>
          </li>)
        }
           <input type="checkbox" checked={isCompleted} onClick={this.activeItems} />
      </div>
    )
  }
}
