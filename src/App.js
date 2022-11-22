import React from 'react';
import { Navbar, Header, Features, Footer } from './Home';
import { NewExercise } from './new-exercise.js';
import { DiscussionPage } from './discussion.js';
import { ExercisePage } from './exercise';
import { DetailsPage } from './exercise-details';

function App(props) {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      {/* <Features /> */}

      <NewExercise />


      <Footer />

    </div>
  )
}

export default App;


{/*
    <body>
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
              <li className="nav-item">
                <a className="nav-link active" aria-label="Home Page" href="index.html">Home</a>
              </li>
              <li className="nav-item">
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

      <header className="home-header">
        <Header />
      </header>

      <main className="home-main mt-5">
        <div className="container container-progress">
          <Features />
        </div>
      </main>

      <footer className="text-center text-lg-start bg-white text-muted">
        <Footer />
        <div className="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
          &copy; 2022 FITNESS 340:
          <a className="text-reset fw-bold" href="#">fitness340.com</a>
        </div>
      </footer>
    </body>
*/}