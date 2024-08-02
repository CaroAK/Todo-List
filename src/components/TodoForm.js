import React, {useState} from 'react'
// Use state keeps track of what users type in

export const TodoForm = ({addTodo}) => {
    const [value, setvalue] = useState("")
    const handleSubmit = e => {
        e.preventDefault(); // prevents default action
        addTodo(value) // pass the state from the TodoForm to the TodoWrapper
        setvalue("") // clear the form
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' 
        value={value} placeholder='What is your next task?' 
        onChange={(e) => setvalue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
