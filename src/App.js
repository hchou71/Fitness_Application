import React from 'react';
import {NewExercise} from './new-exercise.js';
import { ExercisePage } from './exercise';
import { DetailsPage } from './exercise-details';

function App(props) {
  return (
    <ExercisePage exercises={props.exercises}/> // JUST COMMENT OUT UR COMPONENT WHEN DONE TESTING!! @ETHAN, VINSON, ELLIOT
  )
}

export default App;
