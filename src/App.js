import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Navbar.js';
import { Footer } from './Footer.js';
import { HomePage } from './Home.js';
import { NewExercise } from './new-exercise.js';
import { PastWorkoutTest } from './PastWorkoutTest';
import { ExercisePage } from './exercise';
import { DetailsPage } from './exercise-details';
import { PastExercises } from './past-exercises';
import { ProgressPage } from './progress-page.js';
import { LoginPage } from './login.js';
import { Example } from './Navbar.js';

function App(props) {
  return (
    <div>
      {/* classname="home-exa"  */}
      {/* <NavBar /> */}
      <NavBar />

      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="" element={<HomePage />} />
        <Route path="exercise-details" element={<DetailsPage exerciseObj={props.exercises[0]} />} />
        <Route path="track-progress" element={<ProgressPage />} />
        <Route path="previous-workouts" element={<PastExercises />} />
        <Route path="new-exercise" element={<NewExercise />} />
        <Route path="search" element={<ExercisePage exercises={props.exercises} />} />
        <Route path="discussion" element={<PastWorkoutTest url={props.url} />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App;


