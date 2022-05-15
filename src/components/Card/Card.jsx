import React from 'react'
import TaskItem from '../TaskItem/TaskItem';
import { CardContainer, CardBody, CardHeader, CardTitle, CardIcon, CardContent } from './Card.styled';

const Card = (props) => {
  const { title, showIcon } = props;
  const icon = showIcon ? <CardIcon>icon</CardIcon> : <CardIcon>hide icon</CardIcon>;
  return (
    <CardContainer>
        <CardBody>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <TaskItem name='item 1'/>
                <TaskItem name='item 2'/>
                <TaskItem name='item 3'/>
            </CardContent>
        </CardBody>
    </CardContainer>
  )
}

export default Card