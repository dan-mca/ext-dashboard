import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const TaskItemContainer = styled.div`
    border: solid 1px grey;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    margin: 0.25rem 0;
`

export const TaskItemInputContainer = styled.div`
    margin: 0;
    padding: 0;
`

export const TaskItemInput = styled.input`
    
`
export const TaskItemInputCheckbox = styled.input`
    
`

export const TaskItemButtonGroup = styled.div`

`
export const TaskItemButtonLink = styled.a`

`
export const TaskItemButtonIcon = styled(Icon)`
    padding: 0.125rem;
    :hover {
        cursor: pointer;
    }
`
export const TaskItemButtonIconText = styled.span`
    border: 0;
    clip: rect(1px 1px 1px 1px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`
