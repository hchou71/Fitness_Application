import React, { useState } from 'react';

import { FilterBar } from './filter-bar';
import { ExerciseBody } from './exercise-body';

export function ExercisePage(props) {

    const [sortByMuscle, setSortByMuscle] = useState("All");
    const exercises = props.exercises;

    const displayedExercises = exercises.filter((exerciseObj) => {
        if (sortByMuscle === "All") {
            return exerciseObj;
        } else if (exerciseObj.muscleWorked === sortByMuscle) {
            return exerciseObj;
        } else {
            return undefined;
        }
    });

    function sortBy(selectedMuscle) {
        setSortByMuscle(selectedMuscle);
    }

    return (
        <div className='d-flex flex-column min-vh-100'>
            <header className="exercise-header px-5 container-fluid">
                <h1>Search for Exercises</h1>
            </header>
            <main className="p-5 back-main">
                <div className="exercise-body">
                    <FilterBar exercises={exercises} sortByMuscle={sortByMuscle} sortByCallback={sortBy} />
                    <ExerciseBody displayedExercises={displayedExercises} />
                </div>
            </main>
        </div>
    );
}