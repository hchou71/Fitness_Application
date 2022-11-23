import React from 'react';

function Header(props) {
    return (
        <header className="prev-workout-pg">
            <div className="container-fluid">
                <h1>Your Previous Workouts</h1>
            </div>
        </header>
    )
}

export function PrvWorkout(props) {
    return (
        <div className='back-main d-flex flex-column min-vh-100'>
            <Header />
            <main>
                <h2>View your previous workouts that you logged here!</h2>
                <section className="past-content">
                    <div className="container-lg container-sm">
                        <div className="row progress-row">
                            <div className="col-past-content">
                                <p className="workout-desc">Back and Biceps Workout</p>
                                <button type="button" className="btn collapsible">View</button>
                            </div>
                        </div>
                        <div className="row progress-row">
                            <div className="col-past-content">
                                <p className="workout-desc">Chest and Triceps Workout</p>
                                <button type="button" className="btn collapsible">View</button>
                            </div>
                        </div>
                        <div className="row progress-row">
                            <div className="col-past-content">
                                <p className="workout-desc">Legs and Abs Workout</p>
                                <button type="button" className="btn collapsible">View</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}