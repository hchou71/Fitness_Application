import React from 'react';
import { Header } from './Header';

export function HomePage() {
    return (
        <div className='home-main d-flex flex-column min-vh-100'>
            <header className="home-header">
                <Header />
            </header >

            <main className="home-main mt-5">
                <div className="container container-progress">
                    <Features />
                </div>
            </main >
        </div>


    )
}



function Features() {
    return (
        < div className="row" >
            < div className=" col-lg-4 col-12 p-2 border rounded" >
                <h2 className="text-dark">Progress Tracker</h2>
                <p>Track your fitness progress here with our easy to use Fitness Tracker.</p>
                <a className="btn" href="progress.html" role="button">Track »</a>
            </div >

            <div className="col-lg-4 col-12 p-2 border rounded">
                <h2 className="text-dark">Search Your Exercise</h2>
                <p>Not sure which muscle group to target today? Use our Exercise Search feature to find the
                    perfect workout for you! </p>
                <a className="btn" href="exercise.html" role="button">Find Exercises »</a>
            </div>

            <div className=" col-lg-4 col-12 p-2 border rounded">
                <h2 className="text-dark">Discussion & Chat</h2>
                <p>Have questions about fitness and living a healthy lifestyle? Post a question and
                    discuss
                    with fellow Fitness 340 members today!
                </p>
                <a className="btn" href="discussion.html" role="button">Discuss »</a>
            </div>
        </div >
    )
}


