import React from 'react';

export function ProgressPage () {
    return (
        <div>
            <header className="fitness-track-pg">
                <div className="container-fluid">
                    <h1>Your Fitness Journey</h1>
                </div>
            </header>

            <main>
                <h2>Fitness 340 emphasizes a strong importance of health and fitness with the aid of a fitness journal. We
                believe that our users
                should have the right to input their workout data and to be able to easily go back and access these past
                workouts as references.
                </h2>

                <div className="option-container">
                    <div className="row progress-row">
                        <div className="col-6">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">Log Your Workout</h3>
                                    <p className="card-text">Log your current workout here so you can view it for future workouts!
                                    </p>
                                    <a href="new-exercise.html" className="btn btn-primary" role="button">Log</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">View Past Workouts</h3>
                                    <p className="card-text">Forgot what you worked out earlier this week? Can't remember a killer
                                        workout you had in the past?
                                        View your previous workouts with our easy to use workout viewer.</p>
                                    <a href="past-workouts.html" className="btn btn-primary" role="button">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}