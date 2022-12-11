import React from "react";
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database'; //realtime

const URL = 'https://project-fitness-application-default-rtdb.firebaseio.com/';



export function PastWorkoutCard(props) {
  const db = getDatabase();
  const currentUser = props.currentUser;
  const userRef = ref(db, "Users/" + currentUser.uid + "past")

  function GetWorkouts() {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => console.log(data))
      .catch(console.error);
  }
  GetWorkouts();

  return (
    <div className="row progress-row">
      <div className="col-past-content">
        <p className="workout-desc">Back and Biceps Workout</p>
        <button type="button" className="btn collapsible">View</button>
      </div>
    </div>
  )
}
