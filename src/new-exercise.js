import { Tab } from 'bootstrap';
import React from 'react';

function TableRow () {
    return (
        <div>
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
        </div>
    )
}

function TableButtons () {
    return (
        <div class="row progress-row">
                <div class="col-6">
                    <button class="btn btn-primary" type="button" role="button">Add Row</button>
                </div>
                <div class="col-6">
                    <button class="btn btn-success" type="button" role="button">Submit</button>
                </div>
        </div>
    )
}

export function NewExercise (props) {
    return (
        <form className="container form-container">
            <div className="row progress-row">
                    <div className="col-12">
                        <input type="text" className="form-control" placeholder="Workout Name" aria-label="Workout"/>
                    </div>
            </div>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableButtons/>
        </form>
    )
} 