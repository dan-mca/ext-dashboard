import styled from 'styled-components';

export const TaskCardContainer = styled.section`
    width: calc((100vw/12)*3);
    height: auto;
    background: white;
    min-height: calc((100vh/12)*5);
    border-radius: 5px;
    `

export const TaskCardBody = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
`
export const TaskCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: end;
`
export const TaskCardTitle = styled.h3`
    width: 80%;    
    margin: 0;
`
export const TaskCardIcon = styled.div`
    width: 20%;
`
export const TaskCardContent = styled.div`
    display: flex;
    flex-direction: column;
`