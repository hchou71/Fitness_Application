import React from 'react';

export function Header(props) {
    return (
        <div class="container-fluid">
            <h1>FITNESS 340</h1>
            <p class="lead">Our goal is to provide you with the right set of tools to accomplish any fitness goal you set for yourself!</p>
            <p><a class="btn btn-lg" href="#" role="button">Learn more »</a></p>
        </div>
    )
}

export function Features(props) {
    return (
        < div class="row" >
            < div class=" col-lg-4 col-12 p-2 border rounded" >
                <h2 class="text-dark">Progress Tracker</h2>
                <p>Track your fitness progress here with our easy to use Fitness Tracker.</p>
                <a class="btn" href="progress.html" role="button">Track »</a>
            </div >

            <div class="col-lg-4 col-12 p-2 border rounded">
                <h2 class="text-dark">Search Your Exercise</h2>
                <p>Not sure which muscle group to target today? Use our Exercise Search feature to find the
                    perfect workout for you! </p>
                <a class="btn" href="exercise.html" role="button">Find Exercises »</a>
            </div>

            <div class=" col-lg-4 col-12 p-2 border rounded">
                <h2 class="text-dark">Discussion & Chat</h2>
                <p>Have questions about <fitnes></fitnes>s and living a healthy lifestyle? Post a question and
                    discuss
                    with fellow Fitness 340 members today!
                </p>
                <p><a class="btn" href="discussion.html" role="button">Discuss »</a></p>
            </div>
        </div >
    )
}

export function Footer(props) {
    return (
        <div class="text-center text-md-start mt-5">
            <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-3">
                        Fitness 340
                    </h6>
                    <p>
                        Our goal is to foster the habits of work out exercises. We look forward to help on people
                        for all level.
                    </p>
                </div>
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 class="text-uppercase fw-bold mb-3">Contact</h6>
                    <ul class=" list-unstyled ">
                        <li class=" pb-1">
                            <a class="text-muted text-decoration-none" href="mailto:echoi3@uw.edu">echoi3@uw.edu</a>
                        </li>
                        <li class=" pb-1">
                            <a class="text-muted text-decoration-none" href="mailto:hchou71@uw.edu">hchou71@uw.edu</a>
                        </li>
                        <li class=" pb-1">
                            <a class="text-muted text-decoration-none" href="mailto:jck1116@uw.edu">jck1116@uw.edu</a>
                        </li>
                        <li class=" pb-1">
                            <a class="text-muted text-decoration-none" href="mailto:vinliu20@uw.edu">vinliu20@uw.edu</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
