import React from 'react';

class Todo extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {title: this.props.title};
      }

   
    render() {

        return(
            
            <div>
                {this.props.title}sfsfsdf
            </div>
            // <input type="checkbox"></input>
        );
        
    }
    
}

export default Todo;