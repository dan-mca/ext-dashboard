import React from 'react'
import TodoItem from '../TodoItem/TodoItem';
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
                <TodoItem name='item 1'/>
                <TodoItem name='item 2'/>
                <TodoItem name='item 3'/>
            </CardContent>
        </CardBody>
    </CardContainer>
  )
}

export default Card