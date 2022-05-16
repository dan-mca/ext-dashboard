import React from 'react';
import TaskCard from '../TaskCard/TaskCard';
import {MainContainer} from './Main.styled';

const Main = () => {
  
  return (
    <MainContainer>
        <TaskCard title='To do' showIcon={false} />
    </MainContainer>
  )
}

export default Main