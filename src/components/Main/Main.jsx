import React from 'react';
import MailCard from '../MailCard/MailCard';
import SearchCard from '../SearchCard/SearchCard';
import TaskCard from '../TaskCard/TaskCard';
import { MainContainer, MainCardsContainer } from './Main.styled';


const Main = () => {

  return (
    <MainContainer>
        <SearchCard />
        <MainCardsContainer>
          <TaskCard title='Tasks' />
          <MailCard />
        </MainCardsContainer>
    </MainContainer>
  )
}

export default Main