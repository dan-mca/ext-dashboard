import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem calc((100vw/12));

//   @media (max-width:991px) {
//     padding: 2rem 1rem 1rem;
//   }
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
`

export const HeaderUserLink = styled.a`
`

export const HeaderUserImage = styled.img`
    border-radius: 100%;
    width: 2rem;

    :hover {
        cursor: pointer;
    }
`

