import React from 'react'
import { TodoItemContainer, TodoItemTitle, TodoItemButtonGroup, TodoItemButtonLink, TodoItemButtonIcon } from './TodoItem.styled';

const TodoItem = (props) => {
    const { name } = props;

  return (
    <>
        <TodoItemContainer>
            <TodoItemTitle>
                <input type="checkbox" aria-label="Checkbox for following text input"></input>
                <input type="text" class="form-control" aria-label="Text input with checkbox"></input>
            </TodoItemTitle>
            <TodoItemButtonGroup>
                <TodoItemButtonLink href="#">
                    <TodoItemButtonIcon>edit</TodoItemButtonIcon>
                </TodoItemButtonLink>
                <TodoItemButtonLink href="#">
                    <TodoItemButtonIcon>del</TodoItemButtonIcon>
                </TodoItemButtonLink>
            </TodoItemButtonGroup>
        </TodoItemContainer>
    </>
  )
}

export default TodoItem