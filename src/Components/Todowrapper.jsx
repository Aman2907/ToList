import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import  {EditTodoForm}  from './EditTodoForm';
uuidv4();



const Todowrapper = () => {
  const [todos, setTodos] = useState([]);

  // addTodo is being created to pass data as props to TodoForm
  const addTodo = todo => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    
  }

  // Toggle complete is being using to underline the task which is complete or not 
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  
  // we use edittask task.task inside usestate because when we update the content remains inside 
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className='TodoWrapper'>
      <h1>Things to Do Today</h1>

      {/* //form */}
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo key={index.id} task={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
        )
      ))}
    </div>
  )
}

export default Todowrapper
