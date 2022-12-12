import React from 'react';

export function HomeHeader() {
    return (
        <div className="container-fluid">
            <h1>FITNESS 340</h1>
            <p className="lead">Our goal is to provide you with the right set of tools to accomplish any fitness goal you set for yourself!</p>
        </div>
    )
}

export function PastWorkoutHeader(props) {
    return (
        <header className="prev-workout-pg">
            <div className="container-fluid">
                <h1>Your Previous Workouts</h1>
            </div>
        </header>
    )
}