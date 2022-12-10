import React, { useState } from 'react';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database'; //realtime


export function NewExercise(props) {

    const [numRows, setNumRows] = useState(1);
    const currentUserId = props.currentUser.uid;

    function handleAddClick(event) {
        setNumRows(numRows + 1);
    }

    function handleDeleteClick(event) {
        if (numRows > 1) {
            setNumRows(numRows - 1);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const Length = event.target.length;
        const inputArr = [];
        let hasEmpty = false;
        for (let i = 0; i < Length - 3; i++) {
            if(event.target[i].value === "") {
                hasEmpty = true;
            } else {
                inputArr.push(event.target[i].value);
            }
        }
        if (hasEmpty) {
            alert('Incomplete Form: Please Fill Out All Fields');
        } else {
            console.log(inputArr);
            const db = getDatabase(); //"the database"
            const UserRef = ref(db, ("Users/" + currentUserId + "/past/" + Date.now()));
            firebaseSet(UserRef, inputArr);
            alert("Successfully Saved");
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
                        <input id='workoutText' type="text" className="form-control" placeholder="Workout Name" aria-label="Workout" /> 
                    </div>
                </div>
                <Table numRows={numRows} exercises={props.exercises} />
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

    let dummyData = props.exercises.map((exer, i) => {
        return <option key={i}>{exer.name}</option>
    })

    return (
        <div className="row progress-row">
            <div className="col-8">
                <input type="text" className="form-control" placeholder="Exercise" aria-label="Exercise" list='pre-exer' /> 
                <datalist id="pre-exer">
                    {dummyData}
                </datalist>
            </div>
            <div className="col-2">
                <input type="number" className="form-control" placeholder="Sets" aria-label="Sets" min="0" /> 
            </div>
            <div className="col-2">
                <input type="number" className="form-control" placeholder="Reps" aria-label="Reps" min="0" />
            </div>
        </div>
    );
}