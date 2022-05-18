import React from 'react'
import { TaskItemContainer, TaskItemInputContainer, TaskItemInput, TaskItemInputCheckbox, TaskItemButtonGroup, TaskItemButtonLink, TaskItemButtonIcon,TaskItemButtonIconText } from './TaskItem.styled';

const TaskItem = (props) => {
    const { name, id, updatedTask, deleteTask} = props;
    
    const handleChange = (e) => {
        updatedTask({id: e.target.getAttribute('data-id'), text: e.target.value})
    }

    const handleClick = (e) => {
        if (e.type === 'click') {
            deleteTask({id, text: name})
        }
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
                    <TaskItemButtonIcon icon="clarity:edit-line" color="black" aria-hidden="true"></TaskItemButtonIcon>
                    <TaskItemButtonIconText>edit</TaskItemButtonIconText>
                </TaskItemButtonLink>
                <TaskItemButtonLink href="#">  
                    <TaskItemButtonIcon onClick={handleClick} icon="fluent:delete-20-regular" color="#C5221F" aria-hidden="true" ></TaskItemButtonIcon>
                    <TaskItemButtonIconText>delete</TaskItemButtonIconText>
                </TaskItemButtonLink>
            </TaskItemButtonGroup>
        </TaskItemContainer>
    </>
  )
}

export default TaskItem