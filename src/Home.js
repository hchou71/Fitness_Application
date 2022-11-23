import React from 'react';

export function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Fitness 340</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <a className="nav-link" aria-label="Home Page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" aria-label="Progress Page" href="progress.html">Progress Tracker</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-label="Exercise Search Page" href="exercise.html">Exercise Searcher</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-label="Discussion page" href="discussion.html">Discussion</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export function HomePage() {
    return (
        <div className='home-main d-flex flex-column min-vh-100'>
            <header className="home-header">
                <Header />
            </header >

            <main className="home-main mt-5">
                <div className="container container-progress">
                    <Features />
                </div>
            </main >
        </div>


    )
}

function Header() {
    return (
        <div className="container-fluid">
            <h1>FITNESS 340</h1>
            <p className="lead">Our goal is to provide you with the right set of tools to accomplish any fitness goal you set for yourself!</p>
            <a className="btn btn-lg" href="#" role="button">Learn more »</a>
        </div>
    )
}

function Features() {
    return (
        < div className="row" >
            < div className=" col-lg-4 col-12 p-2 border rounded" >
                <h2 className="text-dark">Progress Tracker</h2>
                <p>Track your fitness progress here with our easy to use Fitness Tracker.</p>
                <a className="btn" href="progress.html" role="button">Track »</a>
            </div >

            <div className="col-lg-4 col-12 p-2 border rounded">
                <h2 className="text-dark">Search Your Exercise</h2>
                <p>Not sure which muscle group to target today? Use our Exercise Search feature to find the
                    perfect workout for you! </p>
                <a className="btn" href="exercise.html" role="button">Find Exercises »</a>
            </div>

            <div className=" col-lg-4 col-12 p-2 border rounded">
                <h2 className="text-dark">Discussion & Chat</h2>
                <p>Have questions about fitness and living a healthy lifestyle? Post a question and
                    discuss
                    with fellow Fitness 340 members today!
                </p>
                <a className="btn" href="discussion.html" role="button">Discuss »</a>
            </div>
        </div >
    )
}

export function Footer(props) {
    return (
        <footer className='mt-auto'>
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h3 className="text-uppercase fw-bold mb-3">
                            Fitness 340
                        </h3>
                        <p>
                            Our goal is to foster the habits of work out exercises. We look forward to help on people
                            for all level.
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h4 className="text-uppercase fw-bold mb-3">Contact</h4>
                        <ul className=" list-unstyled ">
                            <li className=" pb-1 me-3">
                                <a className="text-muted text-decoration-none" href="mailto:echoi3@uw.edu">echoi3@uw.edu</a>
                            </li>
                            <li className=" pb-1 me-3">
                                <a className="text-muted text-decoration-none" href="mailto:hchou71@uw.edu">hchou71@uw.edu</a>
                            </li>
                            <li className=" pb-1 me-3">
                                <a className="text-muted text-decoration-none" href="mailto:jck1116@uw.edu">jck1116@uw.edu</a>
                            </li>
                            <li className=" pb-1 me-3">
                                <a className="text-muted text-decoration-none" href="mailto:vinliu20@uw.edu">vinliu20@uw.edu</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="footer-set text-center p-4" >
                &copy; 2022 FITNESS 340:
                <a className="text-reset fw-bold" href="#">fitness340.com</a>
            </div>
        </footer >
    )
}
