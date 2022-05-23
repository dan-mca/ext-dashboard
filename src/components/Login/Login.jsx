import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '1045690708969-nbqk0aja43udogblpmntcmqna2ufqd53.apps.googleusercontent.com';

const Login = (props) => {
    const { profileImageUrl, updateUser } = props

    const onSuccess = (res) => {
        profileImageUrl(res.profileObj.imageUrl);
        updateUser(res.profileObj)
    }

    const onFailure = (res) => {
        console.log('[Login failed] res:', res)
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login