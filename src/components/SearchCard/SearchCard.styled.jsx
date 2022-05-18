import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const SearchCardContainer = styled.section`
    width: calc((100vw/12)*6);    
    border-radius: 3px;
    padding: 1rem;
    background-color: #fff;
    padding: 0.25rem 1rem;
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: text;
`

export const SearchCardInput = styled.input`
    width: 95%;
    border: none;
    height: 2rem;

    :focus {
        outline: none;
    }
`

export const SearchCardLink = styled.a`
    width: 5%;
    display: flex;
    justify-content: end;
    align-items: center;
`

export const SearchCardIcon = styled(Icon)`
    font-size: 18px;

    :hover {
        cursor: pointer;
    }
`

export const SearchCardIconText = styled.span`
    border: 0;
    clip: rect(1px 1px 1px 1px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`