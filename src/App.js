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
    <div className='home-exa'>
      <Navbar />

      {/* <LoginPage /> */}

      {/* <HomePage /> */}
      {/* <DetailsPage exerciseObj={props.exercises[0]}/> */}
      {/* <PrvWorkout /> */}
      {/* <ExercisePage exercises={props.exercises}/> */}
      {/* <NewExercise /> */}
      {/* <DiscussionPage messageData={props.messageData}/> */}
      {/* <ProgressPage/> */}

      <Footer/>

    </div>
  )
}

export default App;


