import React from "react";
import { PastWorkoutModal } from "./pastWorkoutModal";

export function PastWorkoutCard(props) {
  const title = props.stuff[0];


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
        <p className="workout-desc">Workout: {title}</p>
        <button type="button" className="btn collapsible" onClick={handleClick}>View</button>
        <PastWorkoutModal show={modalShow} onHide={handleHide} stuff={props.stuff} />
      </div>
    </div>
  )
}
