import React, { useState } from 'react';
import { SearchCardContainer, SearchCardInput, SearchCardLink, SearchCardIcon, SearchCardIconText } from './SearchCard.styled';

const SearchCard = () => {
    const [searchtext, setSearchText] = useState('')

    const baseSearchUrl = 'https://www.google.com/search?q='

    const getSearchText = (e) => {
        setSearchText(e.target.value)
    }

    const onClick = () => {
        window.location.assign(baseSearchUrl + searchtext)
    }

    return (
    <SearchCardContainer>
        <SearchCardInput onChange={getSearchText} ></SearchCardInput>
        <SearchCardLink>
            <SearchCardIcon icon="ci:search" onClick={onClick} color="#000" aria-hidden="true"></SearchCardIcon>
            <SearchCardIconText >Search</SearchCardIconText>
        </SearchCardLink>
    </SearchCardContainer>
    )
}

export default SearchCard