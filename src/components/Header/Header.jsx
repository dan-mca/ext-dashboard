import React from 'react';
import moment from 'moment';
import {HeaderContainer, HeaderTitle, HeaderDateTimeContainer, HeaderTime, HeaderDate, HeaderSettings} from './Header.styled';

const user = 'Dan'

let today = new Date()
let currentHour = today.getHours()
let amOrPm = currentHour < 12 ? 'AM' : 'PM';
let currentTime = `${currentHour}:${today.getMinutes()} ${amOrPm}`
let currentDate = moment().format("dddd, MMMM D YYYY")

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