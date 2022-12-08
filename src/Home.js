import React from 'react';
import { Header } from './Header';
import { Link } from 'react-router-dom';

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
                <Link className="btn" to="track-progress" role="button">Track »</Link>
            </div >

            <div className="col-lg-4 col-12 p-2 border rounded">
                <h2 className="text-dark">Search Your Exercise</h2>
                <p>Not sure which muscle group to target today? Use our Exercise Search feature to find the
                    perfect workout for you! </p>
                <Link className="btn" to="search" role="button">Find Exercises »</Link>
            </div>

            <div className=" col-lg-4 col-12 p-2 border rounded">
                <h2 className="text-dark">Discussion & Chat</h2>
                <p>Have questions about fitness and living Link healthy lifestyle? Post Link question and
                    discuss
                    with fellow Fitness 340 members today!
                </p>
                <Link className="btn" to="discussion" role="button">Discuss »</Link>
            </div>
        </div >
    )
}


