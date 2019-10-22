import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {inputValue: this.props.message, todoList: []}
}

handleInputChange = (event) =>{
    this.setState({inputValue: event.target.value});
}

renderList = () =>{
    if(this.state.inputValue){
        let todoList = this.state.todoList;
        todoList.push(<Todo title={this.state.inputValue} />);
        this.setState({ todoList: todoList });
        this.setState({ inputValue: '' });
    }
    else{
    
    }
}

render() {
    return(
        <div>
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
                <button onClick = {this.renderList}>Add to list</button><br/>
            </div>
            <div align = "left">
                {this.state.todoList.map(item => (
                       <span key={item}>{item}</span>
                   ))}
            </div>
        </div>
        );
    }
}

export default TodoList;