import React, { useEffect, useState } from 'react';
import { AddTaskContainer, AddTaskInput, AddTaskButton } from './AddTask.styled'

const AddTask = (props) => {
  const { addTask } = props;
  const [inputValue, setInputValue] = useState('')

  const handleChange = e => setInputValue(e.target.value)

  const handleInput = e => {
    if (e.key === 'Enter' && inputValue.length > 0) {
      addTask(inputValue)
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