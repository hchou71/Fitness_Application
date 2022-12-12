import React from 'react';
import { PastWorkoutList } from './PastWorkoutList';
import { PastWorkoutHeader } from './Header';

export function PastExercises(props) {
    return (
        <div className='back-main d-flex flex-column min-vh-100'>
            <PastWorkoutHeader />
            <main>
                <h2>View your previous workouts that you logged here!</h2>
                <section className="past-content">
                    <div className="container-lg container-sm">
                        <PastWorkoutList currentUser={props.currentUser} />
                    </div>
                </section>
            </main>
        </div>
    )
}