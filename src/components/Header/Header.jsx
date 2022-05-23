import React, { useState } from 'react';
import moment from 'moment';
import {HeaderContainer, HeaderTitle, HeaderDateTimeContainer, HeaderTime, HeaderDate } from './Header.styled';
import UserButton from '../UserButton/UserButton';

let currentHour = moment().format("HH")
let currentTime = moment().format("HH:mm A")
let currentDate = moment().format("dddd D MMMM")

const Header = () => {
    const [user, setUser] = useState([]);

    const givenName = user.givenName

    let welcomeMessage = ''
        if (givenName) {
            if (currentHour < 12) {
                welcomeMessage = 'Good morning, ' + givenName
            } else if (currentHour < 18) {
                welcomeMessage = 'Good afternoon, ' + givenName
            } else {
                welcomeMessage = "Good evening, " + givenName
            }
        } else {
            if (currentHour < 12) {
                welcomeMessage = 'Good morning'
            } else if (currentHour < 18) {
                welcomeMessage = 'Good afternoon'
            } else {
                welcomeMessage = "Good evening"
            }
        }
    

    const updateUser = (userObject) => setUser(userObject)

    return (
        <HeaderContainer>
            <HeaderTitle>{welcomeMessage}</HeaderTitle>
            <HeaderDateTimeContainer>
                <HeaderTime>{currentTime}</HeaderTime>
                <HeaderDate>{currentDate}</HeaderDate>
            </HeaderDateTimeContainer>
            <UserButton googleUserObject={updateUser}/>
        </HeaderContainer>
  )
}

export default Header