import { useState, useEffect } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(todo);
    if(todo === '') {
      return;
    }
    setTodo('');
    setTodos(currentArray => [todo, ...currentArray]);
  }; 
  console.log(todos);
  return (
    <div>
      <h1>My Todos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={todo} placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
