import styled from 'styled-components';

export const TaskCardContainer = styled.section`
    width: calc((100vw/12)*3);
    height: auto;
    padding: 1rem;
    background: white;
    min-height: calc((100vh/12)*5);
    border-radius: 5px;
    `

export const TaskCardBody = styled.div`
    display: flex;
    flex-direction: column;
`
export const TaskCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: end;
    height: 1.5rem;
`
export const TaskCardTitle = styled.h3`
    width: 80%;
    font-size: 1.25rem;
    font-weight: normal;   
    margin: 0;
`
export const TaskCardIcon = styled.div`
    width: 20%;
`
export const TaskCardContent = styled.div`
    display: flex;
    flex-direction: column;
`
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  height: 3rem;
  border-bottom: 1px solid lightgrey;
`;

export const Tab = styled.button`
  width: 50%;
  font-size: 16px;
  cursor: pointer;
  padding: 0 1rem;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
