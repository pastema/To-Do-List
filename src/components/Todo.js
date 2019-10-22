import React from 'react';

class Todo extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {message: this.props.title, checked: false};
      }

  handleCheck = () =>{
    this.setState({checked: !this.state.checked});
    console.log({checked: this.state.checked});
  };


    render() {
     
        return(
            <div className= {this.state.checked ? 'doneToDo' : ''}>
                <input type="checkbox" onChange={this.handleCheck}></input> <span>{this.state.message}</span>
            </div>
         
        );
        
    }
    
}

export default Todo;
