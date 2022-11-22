import React from 'react';
import { Navbar, HomePage, Footer } from './Home';
import { NewExercise } from './new-exercise.js';
import { DiscussionPage } from './discussion.js';
import { ExercisePage } from './exercise';
import { DetailsPage } from './exercise-details';
import { PrvWorkout } from './PrvWorkout';

function App(props) {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}


      {/* <NewExercise /> */}
      <PrvWorkout />
      <ExercisePage exercises={props.exercises}/>

      <NewExercise/>    

      <Footer />

    </div>
  )
}

export default App;


