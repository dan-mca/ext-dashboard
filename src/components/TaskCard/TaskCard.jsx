import React from 'react'
import AddTask from '../AddTask/AddTask';
import TaskItem from '../TaskItem/TaskItem';
import { TaskCardContainer, TaskCardBody, TaskCardHeader, TaskCardTitle, TaskCardIcon, TaskCardContent } from './TaskCard.styled';

const TaskCard = (props) => {
  const { title, showIcon } = props;
  const icon = showIcon ? <TaskCardIcon>icon</TaskCardIcon> : <TaskCardIcon>hide icon</TaskCardIcon>;
  return (
    <TaskCardContainer>
        <TaskCardBody>
            <TaskCardHeader>
                <TaskCardTitle>{title}</TaskCardTitle>
                {icon}
            </TaskCardHeader>
            <TaskCardContent>
                <AddTask/>
                <TaskItem name='item 1'/>
                <TaskItem name='item 2'/>
                <TaskItem name='item 3'/>
            </TaskCardContent>
        </TaskCardBody>
    </TaskCardContainer>
  )
}

export default TaskCard
