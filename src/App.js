// https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks
import React, {useState} from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';




function App() {
  const [todos, setTodos] = useState([
    {
      text: 'learn about react hooks',
      isCompleted: false
    },
    {
      text: 'apply for jobs',
      isCompleted: false
    },
    {
      text: 'exercise',
      isCompleted: false
    }
  ]);

  const addTodo = text =>{
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const completeTodo = index =>{
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index =>{
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  
  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index)=>(
          <Todo 
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo = {removeTodo}
            />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
