import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  const toggleCompleted = (id) => {
    setTodos(
      todos.map(e => {
        if(e.id === id) {
          return {...e, completed: !e.completed };
        };
        return e;
      })
    );
  };

  const removeCompleted = () => {
    let filteredTodos = todos.filter(e => !e.completed)
    setTodos(filteredTodos);
  }

  return (
    <div className="container">
      <div className="title">
        <h1>to do list</h1>
      </div>
      <TodoForm addTodo={addTodo} />
      <button type="button" className="clear" onClick={removeCompleted}>Clear Completed</button>
      <div className="to-dos">
        <TodoList todos={todos} toggleCompleted={toggleCompleted} removeCompleted={removeCompleted}/>
      </div>
    </div>
  );
};

export default App;