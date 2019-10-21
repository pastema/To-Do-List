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
    let todoList = this.state.todoList;
    todoList.push(<Todo title={this.state.inputValue} />);
    this.setState({ todoList: todoList });
    console.log(todoList);
    return todoList;
}

render() {
    let renderList = this.renderList;
    return(
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
                <button onClick = {this.renderList}>Add to list</button><br/>
                {renderList}
            </div>
        );
    }
}

export default TodoList;

// handleInputChange = (event) =>{
//     this.setState({inputValue: event.target.value});
//     // console.log(event.target.value);
// }



// renderList = () =>{
//     let todoList =[];
//     todoList.push(<Todo message={this.state.inputValue}/>);
//         console.log(todoList);
//     return todoList;
// }

// // renderList = () =>{
// //     let todoList = this.state.todoList;
// //     todoList.push(<Todo title={this.state.inputValue} />);
// //     this.setState({ todoList: todoList });
// // }

// //     render() {
// //         let todoList = this.renderList();
// //         return(
// //             <div>
// //             <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
// //             <button onClick = {this.renderList}>Add to list</button><br/>
// //             {todoList}
// //             </div>
// //         );
// //     }
// // }
