import React from 'react';

export function LoginPage(props) {

    return (
        <div>
            <h1>Fitness 340</h1>

            <main className="login-content">
                <div className="container">

                    <div className="d-flex login-page">
                        {/* Sign up button */}
                        <div className="d-flex bfont btn button-col btn-lg my-5 px-5">
                            <div>
                                <span className="material-icons md-48" aria-label="Sign Up">how_to_reg</span>
                            </div>
                            <div>
                                <div>Sign</div>
                                <div>Up</div>
                                <div>Now</div>
                            </div>
                        </div>

                        {/* Login button */}
                        <div className="flex-column p-5">
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
                            <div>
                                <a href="index.html" className="btn button-col btn-lg my-5">Log-in <span className="material-icons" aria-label="Save to Profile">login</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}