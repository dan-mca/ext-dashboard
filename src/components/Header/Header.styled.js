import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem calc((100vw/12));
`;

export const HeaderTitle = styled.h1`
    width: 80%;
`

export const HeaderSettings = styled.div`
    width: 5%;
`

export const HeaderDateTimeContainer = styled.div`
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
`

export const HeaderTime = styled.p`
    font-size: 26px;
    margin: 0;
`

export const HeaderDate = styled.p`
    font-size: 16px;
    margin: 0;
`

export const HeaderUserContainer = styled.div`
    width: 7rem;
    height: auto;
    display: flex;
    align-items: center;
`

export const HeaderUserLink = styled.button`
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border: none;
    background: none;
`

export const HeaderProfileImage = styled.img`
    border-radius: 100%;
    width: 2rem;

    :hover {
        cursor: pointer;
    }
`

export const HeaderUserImage = styled(Icon)`
    border-radius: 100%;
    width: 2rem;
    height: 2rem;

    :hover {
        cursor: pointer;
    }
`

export const HeaderUserMenu = styled.div`
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