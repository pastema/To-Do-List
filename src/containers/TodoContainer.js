import { connect } from 'react-redux'
import TodoWrapper from '../components/Todo/TodoWrapper';
import TodoResource from '../api/TodoResource.js';

const mapStateToProps = state => ({
  isOnlyActive: state.todoResource.isOnlyActive,
  todos: state.todoResource.todos.filter(_ => {
    return state.isOnlyActive
      ? _.status === 'active'
      : true
  })
});

const mapDispatchToProps =  dispatch => ({
  createNewTodo: newTodo => {
    const newTodoItem = {
      content: newTodo,
      status: "active"
    };
    TodoResource.createTodo(newTodoItem)
      .then(res => res.json())
      .then(({id, status, content}) => {
        dispatch({
          type: 'ADD_TODO',
          payload: {id, status, content}
        })
      })
  },
  patchNewTodo: (status,id,content) => {
    // console.log("patchNewTodo: " + status+" "+id+" "+content);
    TodoResource.patchTodo(status,id,content)
    .then(res => res.json())
    .then(({id,status,content}) => {
        dispatch({
          type: 'UPDATE_TODO',
          payload: {id,content,status}
        })
    })
  },
  refreshTodos: todos => dispatch({
    type: 'REFRESH_TODOS',
    payload: todos
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoWrapper)
