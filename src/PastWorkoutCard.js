import React from "react";

const URL = '/past-workout.JSON';

export function PastWorkoutCard(props) {
  function GetWorkouts() {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => console.log(data))
      .catch(console.error);
  }
  GetWorkouts();

  return(
    <div className="row progress-row">
      <div className="col-past-content">
        <p className="workout-desc">Back and Biceps Workout</p>
        <button type="button" className="btn collapsible">View</button>
      </div>
    </div>
  )
}
