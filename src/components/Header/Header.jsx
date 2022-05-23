import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { gapi } from 'gapi-script';
import {HeaderContainer, HeaderTitle, HeaderDateTimeContainer, HeaderTime, HeaderDate, HeaderUserContainer, HeaderUserLink, HeaderUserImage} from './Header.styled';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';

// const user = 'Dan'
const clientId = '1045690708969-nbqk0aja43udogblpmntcmqna2ufqd53.apps.googleusercontent.com';

let currentHour = moment().format("HH")
let currentTime = moment().format("HH:mm A")
let currentDate = moment().format("dddd D MMMM")


const Header = () => {
    const [profileImage, setProfileImage] = useState('')
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
    
    useEffect(() => {
    function start() {
        gapi.auth2.init({
        clientId: clientId,
        scope: ''
        })
    }

    gapi.load('client:auth2', start)
    })

    const updateProfileImage = (url) => {
    setProfileImage(url)
    }

    const googleUser = (userObject) => {
        setUser(userObject)
    }

    return (
        <HeaderContainer>
            <HeaderTitle>{welcomeMessage}</HeaderTitle>
            <HeaderDateTimeContainer>
                <HeaderTime>{currentTime}</HeaderTime>
                <HeaderDate>{currentDate}</HeaderDate>
            </HeaderDateTimeContainer>
            <HeaderUserContainer>
                <HeaderUserLink href="#" role="button">
                { profileImage ? <HeaderUserImage src={profileImage} alt="profile image" /> : 'non image' }    
                </HeaderUserLink>
            </HeaderUserContainer>
            <Login profileImageUrl={updateProfileImage} updateUser={googleUser} />
            <Logout removeProfileImage={updateProfileImage}/>
            

            
        </HeaderContainer>
  )
}

export default Header