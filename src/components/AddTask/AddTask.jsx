import React, { useState } from 'react';
import { AddTaskContainer, AddTaskInput, AddTaskButton } from './AddTask.styled'

const AddTask = () => {
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState([])

  const createTaskObject = (taskId, taskText, isChecked) => ({id: taskId, taskText, isChecked: isChecked})
  const addTask = (task) => setTasks([...tasks, createTaskObject(tasks.length, task.taskText, false)])

  const handleChange = e => setInputValue(e.target.value)

  const handleInput = e => {
    if(e.key === 'Enter' && inputValue.length > 0) {
      setInputValue('')
      localStorage.setItem('input', inputValue)
      addTask({taskText: inputValue})
    }
  }
  
  console.log(tasks)

  return (
    <AddTaskContainer>
      <AddTaskInput 
        placeholder='Add new task here...'
        onKeyPress={handleInput}
        onChange={handleChange}
        value={inputValue}
      >
      </AddTaskInput>
      <AddTaskButton>+</AddTaskButton>
    </AddTaskContainer>
  )
}

export default AddTask