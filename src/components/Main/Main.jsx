import React from 'react';
import TaskCard from '../TaskCard/TaskCard';
import {MainContainer} from './Main.styled';

const Main = () => {
  
  return (
    <MainContainer>
        <TaskCard title='Tasks' />
    </MainContainer>
  )
}

export default Main