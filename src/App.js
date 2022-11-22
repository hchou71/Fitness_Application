import React from 'react';
import { Header, Features, Footer } from './Home';
import { NewExercise } from './new-exercise.js';

function App() {
  return (
    <body>
      <nav class="navbar navbar-expand-lg navbar-dark" >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Fitness 340</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-label="Home Page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-label="Progress Page" href="progress.html">Progress Tracker</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-label="Exercise Search Page" href="exercise.html">Exercise Searcher</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-label="Discussion page" href="discussion.html">Discussion</a>
              </li>
            </ul>
          </div>
        </div>
      </nav >

      <header class="home-header">
        <Header />
      </header>

      <main class="home-main mt-5">
        <div class="container container-progress">
          <Features />
        </div>
      </main>

      <footer class="text-center text-lg-start bg-white text-muted">
        <Footer />
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
          &copy; 2022 FITNESS 340:
          <a class="text-reset fw-bold" href="#">fitness340.com</a>
        </div>
      </footer>
    </body>)
}

export default App;
