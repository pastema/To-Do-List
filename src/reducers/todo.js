const initialState = {
  todos: [],
  isOnlyActive: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload]
      };

      
      // case "PATCH_TODO":
      //   return {
      //     ...state,
      //     todos: [...state.todos, payload]
      //   };

    case "REFRESH_TODOS":
      return {
        ...state,
        todos: payload
      };

      case "UPDATE_TODO":
        const newTodos = state.todos.map(todo => {
          if(todo.id === payload.id){
            return payload
          } else {
            return todo
          }
        });
        return{
          ...state,
          todos: [...newTodos]
        };
    
    case "SET_FILTER":
      return {
        ...state,
        isOnlyActive: payload
      };

    default:
      return state
  }
}
