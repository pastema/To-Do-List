export default {
    getAll: () => fetch(
    "http://localhost:6969/api/todos",
    {mode: 'cors'}
    ),
    // getAllCompleted: () => fetch(
    // "http://localhost:6969/api/todos/search/statusOfTodos?status=completed",
    // {mode: 'cors'}
    // ),
     getAllActive: () => fetch(
    "http://localhost:6969/api/todos/search/statusOfTodos?status=active",
    {mode: 'cors'}
    ),
    createTodo: (todo) => fetch(
    "http://localhost:6969/api/todos", {
      mode: 'cors',
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(todo)
    }),
    patchTodo: (status,id,content) => fetch(
      "http://localhost:6969/api/todos/"+id, {
        mode: 'cors',
        method: 'PATCH',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
          "status" : status
        })
      })
}