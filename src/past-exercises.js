import React from 'react';
import { PastWorkoutList } from './PastWorkoutList';

function Header(props) {
    return (
        <header className="prev-workout-pg">
            <div className="container-fluid">
                <h1>Your Previous Workouts</h1>
            </div>
        </header>
    )
}

export function PastExercises(props) {
    return (
        <div className='back-main d-flex flex-column min-vh-100'>
            <Header />
            <main>
                <h2>View your previous workouts that you logged here!</h2>
                <PastWorkoutList currentUser={props.currentUser} />
            </main>

        </div>
    )
}