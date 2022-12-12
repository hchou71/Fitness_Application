import React from 'react';
import { HomeHeader } from './Header';
import { Link } from 'react-router-dom';

export function HomePage() {
    return (
        <div className='home-main d-flex flex-column min-vh-100'>
            <header className="home-header">
                <HomeHeader />
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
            < div className=" col-lg-6 col-12 p-2 border rounded text-center" >
                <h2 className="text-dark">Progress Tracker</h2>
                <p>Track your fitness progress here with our easy to use Fitness Tracker.</p>
                <Link className="btn" to="track-progress" role="button">Track »</Link>
            </div >

            <div className="col-lg-6 col-12 p-2 border rounded text-center">
                <h2 className="text-dark">Search Your Exercise</h2>
                <p>Not sure which muscle group to target today? Use our Exercise Search feature to find the
                    perfect workout for you! </p>
                <Link className="btn" to="search" role="button">Find Exercises »</Link>
            </div>


        </div >
    )
}


