import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database'; //realtime


export function ProgressPage(props) {

    const [viewButton, setViewButton] = useState(null);

    useEffect(() => {

        const currentUser = props.currentUser;
        const db = getDatabase();
        const userRef = ref(db, "Users/");

        function handleClick(event) {
            alert('You must submit a form to view past workouts!');
        }

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (currentUser.uid in data && data[currentUser.uid].past) {
                setViewButton(<Link to="/previous-workouts" className="btn btn-primary" role="button">View</Link>);
            } else {
                setViewButton(<div className="btn btn-primary" role="button" onClick={handleClick}>View</div>);
            }
        })

    }, [props.currentUser]);

    return (
        <div className='back-main d-flex flex-column min-vh-100'>
            <header className="fitness-track-pg">
                <div className="container-fluid">
                    <h1>Your Fitness Journey</h1>
                </div>
            </header>

            <main>
                <h2 className="p-5">Fitness 340 emphasizes a strong importance of health and fitness with the aid of a fitness journal. We
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
                                    <Link to="/new-exercise" className="btn btn-primary" role="button">Log</Link>
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
                                    {viewButton}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Outlet />
        </div>
    )
}