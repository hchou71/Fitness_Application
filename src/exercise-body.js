import React from 'react';
import { Link } from 'react-router-dom';

export function ExerciseBody(props) {
    
    const exercises = props.displayedExercises;

    const cardList = exercises.map((exerciseObj) => {
        return exerciseCard(exerciseObj);
    });

    return (
        <div>
            <div>
                <h1 className="exercise-title">Exercises</h1>
            </div>
            <div className="card-container">
                {cardList}
            </div>
        </div>
    );

}

function exerciseCard(exerciseObj) {

    const {name, img} = exerciseObj;

    return (
        <div className="exercise-card" key={name}>
            <Link to={"/" + name} target="_blank" rel="noreferrer">
                <p>{name}</p>
                <img className="img-thumbnail" src={img} alt={name} />
            </Link>
        </div>
    );

}