import React from 'react'
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
                
            </CardContent>
        </CardBody>
    </CardContainer>
  )
}

export default Card