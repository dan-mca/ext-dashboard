import React, { useEffect, useState } from 'react';
import { AddTaskContainer, AddTaskInput, AddTaskButton } from './AddTask.styled'

const AddTask = () => {
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState(() => {
    const savedtasks = localStorage.getItem('tasks')
    if (savedtasks) {
      return JSON.parse(savedtasks);
    } else {
      return [];
    }
  })

  const handleChange = e => setInputValue(e.target.value)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  const handleInput = e => {
    if (e.key === 'Enter' && inputValue.length > 0) {
      setTasks([...tasks, {id: tasks.length + 1, text: inputValue.trim()}]);
      setInputValue("");
    }
  }


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