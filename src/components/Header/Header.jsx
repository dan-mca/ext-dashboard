import React from 'react';
import moment from 'moment';
import {HeaderContainer, HeaderTitle, HeaderDateTimeContainer, HeaderTime, HeaderDate, HeaderSettings} from './Header.styled';

const user = 'Dan'

let today = new Date()
let currentHour = moment().format("HH")
let currentTime = moment().format("HH:mm A")
let currentDate = moment().format("dddd D MMMM")

let welcomeMessage = ''
if (currentHour < 12) {
    welcomeMessage = 'Good morning, ' + user
} else if (currentHour < 18) {
    welcomeMessage = 'Good afternoon, ' + user
} else {
    welcomeMessage = "Good evening, " + user
}

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderTitle>{welcomeMessage}</HeaderTitle>
        <HeaderSettings>S</HeaderSettings>
        <HeaderDateTimeContainer>
            <HeaderTime>{currentTime}</HeaderTime>
            <HeaderDate>{currentDate}</HeaderDate>
        </HeaderDateTimeContainer>
        

        
    </HeaderContainer>
  )
}

export default Header