import React, { useState } from 'react'



const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
// this handle submit is used for submitting the form after filling the data

  const handleSubmit = e => {
    // prevent default action
    e.preventDefault();
    // add todo
    addTodo(value)
    // clear form after submission
    setValue("")
  }

  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit} >
        <input type="text" className='todo-input' value={value}  placeholder='What is in your mind?'
          onChange={(e) => setValue(e.target.value)} />
        <button type="submit" className='todo-btn'>Add Task</button>
      </form>
    </>
  )
}

export default TodoForm
