import React, { useState } from 'react';

export function NewExercise (props) {

    const [numRows, setNumRows] = useState(1);

    function handleAddClick(event) {
        setNumRows(numRows + 1);
    }

    function handleDeleteClick(event) {
        if (numRows > 1) {
            setNumRows(numRows - 1);
        }
    }

    return (
        <form className="container form-container">
            <div className="row progress-row">
                <div className="col-12">
                    <input type="text" className="form-control" placeholder="Workout Name" aria-label="Workout"/>
                </div>
            </div>
            <Table numRows={numRows}/>
            <div className="row progress-row">
                <div className="col-4">
                    <button className="btn btn-primary" id='form-button' type="button" onClick={handleAddClick}>Add Row</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-primary" id='form-button' type="button" onClick={handleDeleteClick}>Delete Row</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success" id='form-button' type="button">Submit</button>
                </div>
            </div>
    </form>
    )
} 

function Table(props) {
    const numRows = props.numRows;

    const allRows = [...Array(numRows)].map((e, i) => {
        return <TableRow key={i}/>;
    })

    return allRows;
}

function TableRow() {

    return(
        <div className="row progress-row">
            <div className="col-8">
                <input type="text" className="form-control" placeholder="Exercise" aria-label="Exercise"/>
            </div>
            <div className="col-2">
                <input type="number" className="form-control" placeholder="Sets" aria-label="Sets" min="0"/>
            </div>
            <div className="col-2">
                <input type="number" className="form-control" placeholder="Reps" aria-label="Reps" min="0"/>
            </div>
        </div>
    );
}