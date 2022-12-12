import React from "react";
import { PastWorkoutModal } from "./pastWorkoutModal";

export function PastWorkoutCard(props) {
  const title = props.stuff[0];
  const name = props.stuff[1];
  const set = props.stuff[2];
  const reps = props.stuff[3];
  // console.log(props.stuff);
  const [modalShow, setModalShow] = React.useState(false);

  function handleClick() {
    setModalShow(true);
  }

  function handleHide() {
    setModalShow(false);
  }

  return (
    <div className="row progress-row">
      <div className="col-past-content">
        <p className="workout-desc">Title: {title}</p>
        <p className="workout-desc">Name: {name}</p>
        <p className="workout-desc">Sets: {set}</p>
        <p className="workout-desc">Reps: {reps}</p>
        <button type="button" className="btn collapsible" onClick={handleClick}>View</button>
        <PastWorkoutModal show={modalShow} onHide={handleHide} stuff={props.stuff} />
      </div>
    </div>
  )
}
