import React from 'react';
import { Navbar, HomePage, Footer } from './Home';
import { NewExercise } from './new-exercise.js';
import { DiscussionPage } from './discussion.js';
import { ExercisePage } from './exercise';
import { DetailsPage } from './exercise-details';
import { PrvWorkout } from './PrvWorkout';
import {ProgressPage} from './progress-page.js';

function App(props) {
  return (
    <div>
      <Navbar />
      
      {/* <HomePage /> */}
      {/* <ProgressPage/> */}
      {/* <DiscussionPage/> */}
      {/* <NewExercise /> */}
      {/* <PrvWorkout /> */}
      {/* <ExercisePage exercises={props.exercises}/> */}
      {/* <DetailsPage exerciseObj={props.exercises[0]}/> */}

      <Footer />

    </div>
  )
}

export default App;


