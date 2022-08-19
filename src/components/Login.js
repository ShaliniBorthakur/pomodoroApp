import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script'
import "./styles.css";

const Login = (props) => {
    const clientId = "600277441932-dvv8ilqfvj9vevlm83babpm897htruvm.apps.googleusercontent.com";
    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId })
        })
    }, [])

    const responseGoogle = (response) => {
    
        props.response(response)
    }
    return (
        <div className='container'>
            <h1>Sign in with Google</h1>
            <GoogleLogin style={{boxShadow:' 10px 10px 5px #aaaaaa', fontSize:'4rem'}}
                clientId={clientId}
                buttonText="Sign in "
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login