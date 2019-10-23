import React, {Component} from 'react';
import TodoInput from './TodoInput'
import Todos from './Todos'
import "./Todo.css"
import TodoResource from '../../api/TodoResource';
import { Typography  } from 'antd';
const { Title } = Typography;
export default class TodoWrapper extends Component {
  state = {
    activeItems: false,
  };
  componentDidMount() {
    // console.log("componentDidMount " + this.state.activeItems)
    if(this.state.activeItems === true){
    TodoResource.getAll()
      .then(res => res.json())
      .then(res => {
        // console.log("todos res:", res._embedded.todos);
        this.props.refreshTodos( res._embedded.todos)
      })
    }else if(this.state.activeItems === false){
    TodoResource.getAllActive()
    .then(res => res.json())
    .then(res => {
      // console.log("todos res:", res._embedded.todos);
      this.props.refreshTodos( res._embedded.todos)
    })
    }
  };

  addNewTodo = newTodoContent => {
    // console.log("addNewTodo "+newTodoContent);
    if(newTodoContent) {
      this.props.createNewTodo(newTodoContent);
    }
  };

  patchCheckBoxStatus = (status,id,content) => {
    // console.log(content + " CONTENTTTTT")
    // console.log("patchCheckBoxStatus "+status+" "+id);
    // console.log("http://localhost:6969/api/todos/"+id+"");
    this.props.patchNewTodo(status,id,content);
  };

  ActiveItems = (status) => {
    // console.log("ActiveItems "+ status);
    this.setState({activeItems: status})
    this.componentDidMount();
  };

  render() {
    return (
      <div>
       <Title type="warning">To Do List</Title>
        <TodoInput onNewTodoAdded={this.addNewTodo}/>
        <Todos todos={this.props.todos} getCheckboxStatus={this.patchCheckBoxStatus} getActiveItems={this.ActiveItems}/>
        
      </div>
    )
  }
}