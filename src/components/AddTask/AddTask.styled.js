import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const AddTaskContainer = styled.section`
    border: solid 1px grey;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    margin: 0.25rem 0;
`
export const AddTaskInput = styled.input`
    border: none;
    width: 100%;

    :focus {
        outline: none;
    }
`
export const AddTaskButton = styled.button`
    border: none;
    background: none;
    padding: 0;
`

export const AddTaskButtonIcon = styled(Icon)`
    font-size: 18px;
    :hover {
        cursor: pointer;
    }
`

export const AddTaskButtonText = styled.span`
    border: 0;
    clip: rect(1px 1px 1px 1px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`
