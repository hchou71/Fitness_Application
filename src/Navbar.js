import React from "react";

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