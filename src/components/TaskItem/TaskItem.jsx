import React, { useState } from 'react'
import { TaskItemContainer, TaskItemInputContainer, TaskItemInput, TaskItemInputCheckbox, TaskItemButtonGroup, TaskItemButtonLink, TaskItemButtonIcon,TaskItemButtonIconText } from './TaskItem.styled';

const TaskItem = (props) => {
    const { name, id, updatedTask, deleteTask, checkedTask, checked} = props;
    const [isEditing, setIsEditing] = useState(false)

    const handleChange = (e) => {
        updatedTask({id: e.target.getAttribute('data-id'), text: e.target.value})
    }

    const handleClick = (e) => {
        if (e.target.getAttribute('data-name') === 'delete') {
            deleteTask({id, text: name})
        }
    }

    const handleEditClick = (e) => {
        if (e.target.getAttribute('data-name') === 'edit') {
            setIsEditing(!isEditing)
        }
    }

    const handleCheckboxClick = (e) => {
        console.log({id, text: name.trim(), checked: e.target.checked})
        checkedTask({id, text: name.trim(), checked: e.target.checked})
      }

    const isChecked = checked ? 'checked' : null

  return (
    <>
        <TaskItemContainer>
            <TaskItemInputContainer>
                <TaskItemInputCheckbox type="checkbox" onClick={handleCheckboxClick} aria-label="Checkbox for following text input" checked={isChecked}/>
                { !checked && isEditing ?
                    <TaskItemInput type="text" data-id={id} defaultValue={name} onChange={handleChange} aria-label="Text input with checkbox"/>
                    : !isEditing ?
                    <span>{name}</span>
                    :
                    <del>{name}</del>
                }
            </TaskItemInputContainer>
            <TaskItemButtonGroup>
                { !checked ?
                    <TaskItemButtonLink>
                        <TaskItemButtonIcon icon="clarity:edit-line" color="black" aria-hidden="true" data-name="edit" onClick={handleEditClick} ></TaskItemButtonIcon>
                        <TaskItemButtonIconText>edit</TaskItemButtonIconText>
                    </TaskItemButtonLink>
                    :
                    null
                }
                <TaskItemButtonLink>  
                    <TaskItemButtonIcon onClick={handleClick} icon="fluent:delete-20-regular" color="#C5221F" aria-hidden="true" data-name="delete"></TaskItemButtonIcon>
                    <TaskItemButtonIconText>delete</TaskItemButtonIconText>
                </TaskItemButtonLink>
            </TaskItemButtonGroup>
        </TaskItemContainer>
    </>
  )
}

export default TaskItem