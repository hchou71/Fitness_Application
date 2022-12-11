import React from "react";
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database'; //realtime




export function PastWorkoutCard(props) {
  const title = props.stuff[0];
  const name = props.stuff[1];
  const set = props.stuff[2];
  const reps = props.stuff[3];
  console.log(props.stuff);

  return (
    <div className="row progress-row">
      <div className="col-past-content">
        <p className="workout-desc">Title: {title}</p>
        <p className="workout-desc">Name: {name}</p>
        <p className="workout-desc">Sets: {set}</p>
        <p className="workout-desc">Reps: {reps}</p>
        <button type="button" className="btn collapsible">View</button>
      </div>
    </div>
  )
}
