import React from 'react';
import { useParams } from 'react-router-dom';

export function DetailsPage(props) {

    const urlParams = useParams();
    const currentExercise = urlParams.exercise;
    const exercises = props.exercises;
    const exercisesAsObject = {};

    exercises.forEach((exerciseObj) => {
        const name = exerciseObj.name;
        exercisesAsObject[name] = exerciseObj;
    });

    const exerciseObj = exercisesAsObject[currentExercise];
    const { name, img, equipment, summary, howTo } = exerciseObj;

    return (
        <main className="info-body d-flex flex-column min-vh-100">
            <div className="save-to-profile btn button-col btn-lg my-5">
                <div>
                    <p>Save to Profile</p>
                    <span className="material-icons" aria-label="Save to Profile">library_add</span>
                </div>
            </div>

            <div className='exer'>
                <h1>{name}</h1>
                <img className="py-3 exercise-img" src={img} alt={name} />
                <div className="py-3">
                    <p>Equipment needed: {equipment}.</p>
                    <p>{summary}</p>
                    <p>{howTo}</p>
                </div>
            </div>
        </main>
    );

}