import styled from 'styled-components';

export const CardContainer = styled.section`
    width: calc((100vw/12)*3);
    height: 200px;
    background: white;
`

export const CardBody = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
`
export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: end;
`
export const CardTitle = styled.h3`
    width: 80%;    
    margin: 0;
`
export const CardIcon = styled.div`
    width: 20%;
`
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
`