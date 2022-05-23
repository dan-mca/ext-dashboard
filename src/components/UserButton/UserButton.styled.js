import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const UserButtonUserContainer = styled.div`
    width: 7rem;
    height: auto;
    display: flex;
    align-items: center;
`

export const UserButtonUserLink = styled.button`
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border: none;
    background: none;
`

export const UserButtonProfileImage = styled.img`
    border-radius: 100%;
    width: 2rem;

    :hover {
        cursor: pointer;
    }
`

export const UserButtonUserImage = styled(Icon)`
    border-radius: 100%;
    width: 2rem;
    height: 2rem;

    :hover {
        cursor: pointer;
    }
`

export const UserButtonUserMenu = styled.div`
    width: auto;
    height: auto;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 3px;
    list-style: none;
    display: ${props => props.display};
    position: absolute;
    top: 105px;
    box-shadow: 0 1px 1px 0 rgb(66 66 66 / 8%), 0 1px 3px 1px rgb(66 66 66 / 16%);
`