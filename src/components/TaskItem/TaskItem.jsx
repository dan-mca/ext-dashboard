import React from 'react'
import { TaskItemContainer, TaskItemTitle, TaskItemButtonGroup, TaskItemButtonLink, TaskItemButtonIcon } from './TaskItem.styled';

const TaskItem = (props) => {
    const { name } = props;

  return (
    <>
        <TaskItemContainer>
            <TaskItemTitle>
                <input type="checkbox" aria-label="Checkbox for following text input"></input>
                <input type="text" class="form-control" aria-label="Text input with checkbox"></input>
            </TaskItemTitle>
            <TaskItemButtonGroup>
                <TaskItemButtonLink href="#">
                    <TaskItemButtonIcon>edit</TaskItemButtonIcon>
                </TaskItemButtonLink>
                <TaskItemButtonLink href="#">
                    <TaskItemButtonIcon>del</TaskItemButtonIcon>
                </TaskItemButtonLink>
            </TaskItemButtonGroup>
        </TaskItemContainer>
    </>
  )
}

export default TaskItem