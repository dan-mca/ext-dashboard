import React from 'react'
import { TaskItemContainer, TaskItemInputContainer, TaskItemInput, TaskItemInputCheckbox, TaskItemButtonGroup, TaskItemButtonLink, TaskItemButtonIcon } from './TaskItem.styled';

const TaskItem = (props) => {
    const { name, id, updatedTask} = props;

    const handleChange = (e) => {
        updatedTask({id: e.target.getAttribute('data-id'), text: e.target.value})
    }

  return (
    <>
        <TaskItemContainer>
            <TaskItemInputContainer>
                <TaskItemInput type="checkbox" aria-label="Checkbox for following text input"/>
                <TaskItemInputCheckbox type="text" data-id={id} defaultValue={name} onChange={handleChange} aria-label="Text input with checkbox"/>
            </TaskItemInputContainer>
            <TaskItemButtonGroup>
                <TaskItemButtonLink href="#">
                    <TaskItemButtonIcon icon="clarity:edit-line" color="black"></TaskItemButtonIcon>
                </TaskItemButtonLink>
                <TaskItemButtonLink href="#">  
                    <TaskItemButtonIcon icon="fluent:delete-20-regular" color="#C5221F"></TaskItemButtonIcon>
                </TaskItemButtonLink>
            </TaskItemButtonGroup>
        </TaskItemContainer>
    </>
  )
}

export default TaskItem