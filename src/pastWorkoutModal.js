import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";

export function PastWorkoutModal(props) {
    const details = props.stuff;

    let names = [];
    let sets = [];
    let reps = [];

    for (let i = 1; i < details.length; i += 3) {
        names.push(details[i]);
        sets.push(details[i + 1]);
        reps.push(details[i + 2]);
    };

    const workouts = names.map((element, i) => {
        console.log(names[i]);
        return <Workouts name={names[i]} set={sets[i]} rep={reps[i]} />
    })

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {details[0]}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {workouts}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Workouts(props) {
    return (
        <div>
            <p className="workout-desc">Name: {props.name}</p>
            <p className="workout-desc">Sets: {props.set}</p>
            <p className="workout-desc">Reps: {props.rep}</p>
        </div>
    )
}