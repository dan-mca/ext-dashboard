import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const TaskItemContainer = styled.div`
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    margin: 0.25rem 0;
    box-shadow: 0 1px 1px 0 rgb(66 66 66 / 8%), 0 1px 3px 1px rgb(66 66 66 / 16%);

    :hover {
        cursor: pointer;
        box-shadow: 0 4px 1px 0 rgb(66 66 66 / 8%), 0 1px 3px 1px rgb(66 66 66 / 16%);
    }
`

export const TaskItemInputContainer = styled.div`
    width: 80%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const TaskItemInput = styled.input`
    background-color: #fff;
    border: 1px solid grey;
    width: 80%;
`

export const TaskItemText = styled.span`
    padding-left: 0.5rem;
`

export const TaskItemTextStrike = styled.del`
    padding-left: 0.5rem;
`

export const TaskItemInputCheckbox = styled.input`
    position: relative;
    min-width: 1em;
    min-height: 1em;
    color: black;
    border: 1px solid #1A73E8;
    border-radius: 3px;
    appearance: none;
    outline: 0;
    cursor: pointer;
    transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
    &::before {
        position: absolute;
        content: '';
        display: block;
        top: 0px;
        left: 5px;
        width: 2px;
        height: 8px;
        border-style: solid;
        border-color: #fff;
        border-width: 0 1px 1px 0;
        transform: rotate(45deg);
        opacity: 0;
    }
    &:checked {
        color: #1A73E8;
        border-color: #1A73E8;
        background: #1A73E8;
    &::before {
        opacity: 1;
    }
    }
`

export const TaskItemButtonGroup = styled.div`
    width: 20%;
    display: flex;
    justify-content: end;
    align-items: center;
`
export const TaskItemButtonLink = styled.a`

`
export const TaskItemButtonIcon = styled(Icon)`
    padding: 0.125rem;
    width: 1rem;
    height: 1rem;
    
    :hover {
        cursor: pointer;
        background-color: #E5E5E5;
        box-shadow: 0 1px 1px 0 rgb(66 66 66 / 8%), 0 1px 3px 1px rgb(66 66 66 / 16%);
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
