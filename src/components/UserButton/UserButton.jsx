import React, { useEffect, useState } from 'react';
import { UserButtonUserContainer, UserButtonUserLink, UserButtonUserImage, UserButtonProfileImage, UserButtonUserMenu } from './UserButton.styled';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import { gapi } from 'gapi-script';

const clientId = '1045690708969-nbqk0aja43udogblpmntcmqna2ufqd53.apps.googleusercontent.com';


const UserButton = (props) => {
    const { googleUserObject } = props;
    const [profileImage, setProfileImage] = useState('')
    const [isToggled, setIsToggled] = useState(false)

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
        googleUserObject(userObject)
    }
    
    const handleToggle = (e) => {
        setIsToggled(!isToggled)
        console.log(isToggled)
    }

    return (
        <UserButtonUserContainer>
            <UserButtonUserLink href="#" role="button">
            { profileImage ? 
                <>
                    <UserButtonProfileImage src={profileImage} alt="profile image" onClick={handleToggle} /> 
                    { isToggled && 
                        <UserButtonUserMenu display='flex'>
                            <Logout removeProfileImage={updateProfileImage}/>
                        </UserButtonUserMenu>
                    }
                </>
                : 
                <>
                    <UserButtonUserImage icon='carbon:user-avatar-filled-alt' onClick={handleToggle} /> 
                    { isToggled && 
                        < UserButtonUserMenu display='flex'>
                            <Login profileImageUrl={updateProfileImage} updateUser={googleUser} />
                        </UserButtonUserMenu>
                    }
                </>
            }    
            </UserButtonUserLink>
        </UserButtonUserContainer>
    )
}

export default UserButton