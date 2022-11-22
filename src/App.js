import React from 'react';
import { Navbar, HomePage, Footer } from './Home';
import { NewExercise } from './new-exercise.js';
import { DiscussionPage } from './discussion.js';
import { ExercisePage } from './exercise';
import { DetailsPage } from './exercise-details';
import { PrvWorkout } from './PrvWorkout';
import { ProgressPage } from './progress-page.js';
import { LoginPage } from './login';

function App(props) {
  return (
    <div>
      <Navbar />

      <LoginPage />
      {/* <HomePage /> */}
      {/* <ProgressPage/> */}
      {/* <DiscussionPage/> */}
      {/* <NewExercise /> */}
      {/* <DiscussionPage messageData={props.messageData}/> */}
      {/* <PrvWorkout /> */}
      {/* <ExercisePage exercises={props.exercises}/> */}

      <Footer />

    </div>
  )
}

export default App;


