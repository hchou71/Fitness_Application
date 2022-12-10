import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';

export function LoginPage(props) {

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

            {/* <LogInAction auth={auth} setUserIsLoggedInCallback={setUserIsLoggedIn}/> */}

            {/* <main className="login-content">
                <div className="container">
                    <div className="d-flex login-page">
                        {/* Sign up button */}
                        {/* <div className="d-flex bfont btn button-col btn-lg my-5 px-5">
                            <div>
                                <span className="material-icons md-48" aria-label="Sign Up">how_to_reg</span>
                            </div>
                            <div>
                                <div>Sign</div>
                                <div>Up</div>
                                <div>Now</div>
                            </div>
                        </div> */}

                        {/* Login button */}
                        {/* <div className="flex-column p-5">
                            <div className="mb-3 row">
                                <label htmlFor="inputEmail" className="col-sm-10 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="youremail@email.com" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-sm-10 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div className='login-page'>
                                <a href="index.html" className="btn button-col btn-lg my-5">Log-in <span className="material-icons" aria-label="Save to Profile">login</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main> */}
        </div>
    );
}

// function LogInAction(props) {
//     const auth = props.auth;
//     const setUserIsLoggedInCallback = props.setUserIsLoggedInCallback;
//     const [user, loading, error] = useAuthState(auth);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     if (user) {
//         setUserIsLoggedInCallback(true);
//         return <Navigate to="" />
//     } else {
//         return <p>Please Sign In.</p>
//     }
// }