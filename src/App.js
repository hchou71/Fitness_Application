import React from 'react';
import { Navbar, HomePage, Footer } from './Home';
import { NewExercise } from './new-exercise.js';
import { DiscussionPage } from './discussion.js';
import { ExercisePage } from './exercise';
import { DetailsPage } from './exercise-details';
import { PrvWorkout } from './PrvWorkout';

function App() {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}

<<<<<<< HEAD

      {/* <NewExercise /> */}
      <PrvWorkout />
=======
    <ExercisePage exercises={props.exercises}/>

    <NewExercise/>    
>>>>>>> ceb0c0adb08983d6a3aac3ac10a1d324cb2bfe45

      <Footer />

    </div>
  )
}

export default App;


