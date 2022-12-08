import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { HomePage } from './Home';
import { NewExercise } from './new-exercise.js';
import { DiscussionPage } from './DiscussionPage.js';
import { ExercisePage } from './exercise';
import { DetailsPage } from './exercise-details';
import { PastExercises } from './past-exercises';
import { ProgressPage } from './progress-page.js';
import { LoginPage } from './login';

function App(props) {
  return (
    <div> 
      {/* classname="home-exa"  */}
      <Navbar />

      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="" element={<HomePage />} />
        <Route path="exercise-details" element={<DetailsPage exerciseObj={props.exercises[0]} />} />
        <Route path="track-progress" element={<ProgressPage />} > 
          <Route path="previous-workouts" element={<PastExercises />} />
          <Route path="new-exercise" element={<NewExercise />} />
        </Route>
        <Route path="search" element={<ExercisePage exercises={props.exercises} />} />
        <Route path="discussion" element={<DiscussionPage messageData={props.messageData} />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App;


