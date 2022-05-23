import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login'

const clientId = '1045690708969-nbqk0aja43udogblpmntcmqna2ufqd53.apps.googleusercontent.com';

const Logout = (props) => {
    const { removeProfileImage } = props;

    const onSuccess = () => {
        console.log('Successfully logged out')
        removeProfileImage('')
    }

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText={'Logout'}
                onLogoutSuccess={onSuccess}
            />
        </div>
  )
}

export default Logout