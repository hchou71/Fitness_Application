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

      <Footer />

    </div>
  )
}

export default App;


