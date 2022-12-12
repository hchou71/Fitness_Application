import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';

export function LoginPage(props) {

    const currentUser = props.currentUser;

    if (currentUser != null) {
        return <Navigate to="/" />
    }

    const auth = getAuth();
    const uiConfigObj = {
        signInOptions: [ 
            { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true}, 
            { provider: GoogleAuthProvider.PROVIDER_ID}
        ],
        signInFlow: 'popup',
        callbacks: {
            signInSuccessWithAuthResult: () => false
        },
        credentialHelper: 'none'
    };

    return (
        <div className='login-page d-flex flex-column min-vh-100'>
            <h1 className='header'>Fitness 340</h1>

            <StyledFirebaseAuth firebaseAuth={auth} uiConfig={uiConfigObj} />

        </div>
    );
}