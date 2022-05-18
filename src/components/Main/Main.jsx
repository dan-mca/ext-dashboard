import React from 'react';
import SearchCard from '../SearchCard/SearchCard';
import TaskCard from '../TaskCard/TaskCard';
import {MainContainer} from './Main.styled';

const Main = () => {
  
  return (
    <MainContainer>
        <SearchCard />
        <TaskCard title='Tasks' />
    </MainContainer>
  )
}

export default Main