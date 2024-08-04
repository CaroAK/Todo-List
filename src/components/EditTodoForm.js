import React, {useState} from 'react'
// Use state keeps track of what users type in

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setvalue] = useState(task.task)
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id)
        setvalue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' 
        value={value} placeholder='Update Task' 
        onChange={(e) => setvalue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
