import React from "react";
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database'; //realtime




export function PastWorkoutCard(props) {
  const title = props.form[0];
  console.log(props.form);

  return (
    <div className="row progress-row">
      <div className="col-past-content">
        <p className="workout-desc">{title}</p>
        <button type="button" className="btn collapsible">View</button>
      </div>
    </div>
  )
}
