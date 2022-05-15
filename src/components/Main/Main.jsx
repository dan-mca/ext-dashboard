import React from 'react';
import Card from '../Card/Card';
import {MainContainer} from './Main.styled';

const Main = () => {
  
  return (
    <MainContainer>
        <Card title='To do' showIcon={false} />
    </MainContainer>
  )
}

export default Main