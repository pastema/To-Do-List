export default {
  getAll: () => fetch(
    "http://localhost:6969/api/todos",
    {mode: 'cors'}
    ),
  createTodo: (todo) => fetch(
    "http://localhost:6969/api/todos", {
      mode: 'cors',
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(todo)
    }),
    patchTodo: (status,id) => fetch(
      "http://localhost:6969/api/todos/"+id, {
        mode: 'cors',
        method: 'PATCH',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
          "status" : status
        })
      })
}

        // .then(res=>res.json())
        // .then(res => console.log(res))
        // mode: 'cors',
        // method: 'PATCH', 
        // body: JSON.stringify(status),
        // headers: new Headers({ 'Content-Type': 'application/json'})
        // .then(res=>res.json())
        // .then(res => console.log(res))
        // mode: 'cors',
        // method: 'PATCH',
        // headers: new Headers({'Content-Type': 'application/json'}),
        // body: JSON.stringify(status)