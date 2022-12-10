import React, { useState } from 'react';
import { getDatabase } from 'firebase/database';

export function NewExercise(props) {

    const [numRows, setNumRows] = useState(1);
    // const [workoutName, setWorkoutName] = useState({});
    // const [rowObj, setRowObj] = useState(null);
    const db = getDatabase();

    function handleAddClick(event) {
        setNumRows(numRows + 1);
    }

    function handleDeleteClick(event) {
        if (numRows > 1) {
            setNumRows(numRows - 1);
        }
    }

    // const handleWorkoutName = (event) => {
    //     let name = event.target.value
    //     setWorkoutName(name);
    // }

    // console.log(workoutName);
    // console.log(rowObj);

    const handleSubmit = (event) => {
        event.preventDefault();
        const Length = event.target.length;
        for (let i = 1; i < Length - 3; i++) {
            console.log(event.target[i].value);
        }
    }

    return (
        <div className='back-main d-flex flex-column min-vh-100'>
            <header className="progress-pg">
                <div className="container-fluid">
                    <h1>Log Your Workout</h1>
                </div>
            </header>

            <main>
                <h2 className="py-3 px-5">Track your workout progress by entering the exercise you did and inputting the amount of sets and
                    repetitions for each exercise.</h2>
            </main>


            <form className="container form-container" onSubmit={handleSubmit}>
                <div className="row progress-row">
                    <div className="col-12">
                        <label htmlFor='workoutText'>Workout Name: </label>
                        <input id='workoutText' type="text" className="form-control" placeholder="Workout Name" aria-label="Workout" /> {/*name='workout' onChange={handleWorkoutName} value={workoutName.workout} */}
                    </div>
                </div>
                <Table numRows={numRows} exercises={props.exercises} /> {/* setRowObj={setRowObj}*/}
                <div className="row progress-row">
                    <div className="col-4">
                        <button className="btn btn-primary" type="button" onClick={handleAddClick}>Add Exercise</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-danger" type="button" onClick={handleDeleteClick}>Remove Exercise</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-success" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

function Table(props) {
    const numRows = props.numRows;

    const allRows = [...Array(numRows)].map((e, i) => {
        return <TableRow key={i} setRowObj={props.setRowObj} exercises={props.exercises} />;
    })

    return allRows;
}

function TableRow(props) {
    // const [workoutInput, setWorkoutInput] = useState({});

    // const setRow = props.setRowObj;

    // setRow(workoutInput);

    // const handleChange = (event) => {
    //     const name = event.target.name
    //     const value = event.target.value
    //     setWorkoutInput(values => ({
    //         ...values, [name]: value
    //     }))
    // }
    let dummyData = props.exercises.map((exer, i) => {
        return <option key={i}>{exer.name}</option>
    })

    return (
        <div className="row progress-row">
            <div className="col-8">
                <input type="text" className="form-control" placeholder="Exercise" aria-label="Exercise" list='pre-exer' /> {/* onChange={handleChange} name='exercise' value={workoutInput.exercise}*/}
                <datalist id="pre-exer">
                    {dummyData}
                </datalist>
            </div>
            <div className="col-2">
                <input type="number" className="form-control" placeholder="Sets" aria-label="Sets" min="0" /> {/* onChange={handleChange} name='sets' value={workoutInput.sets}*/}
            </div>
            <div className="col-2">
                <input type="number" className="form-control" placeholder="Reps" aria-label="Reps" min="0" /> {/* onChange={handleChange} name='reps' value={workoutInput.reps}*/}
            </div>
        </div>
    );
}