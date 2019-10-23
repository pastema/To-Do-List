import React, {Component} from 'react'
import { Input, Button } from 'antd';
export default class TodoInput extends Component {
  state = {
    inputValue: ''
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value});
  };

  dispatch = () => {
    this.props.onNewTodoAdded(this.state.inputValue);
    // console.log("CHECK IF ITO MAUNA LUMABAS");
    this.setState({inputValue: ''})
  };

  render() {
    return (
      <div className="todo-input" >
        <Input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        <Button onClick={this.dispatch}>add</Button>
      </div>
    )
  }
}