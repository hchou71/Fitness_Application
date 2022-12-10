import React from "react";
import { Link } from "react-router-dom";

export function Footer(props) {
    return (
        <footer className='mt-auto'>
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h3 className="text-uppercase fw-bold mb-3">
                            Fitness 340
                        </h3>
                        <p>
                            Our goal is to foster the habits of work out exercises. We look forward to help on people
                            for all level.
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h4 className="text-uppercase fw-bold mb-3">Contact</h4>
                        <ul className=" list-unstyled ">
                            <li className=" pb-1 me-3">
                                <a className="text-muted text-decoration-none" href="mailto:echoi3@uw.edu">echoi3@uw.edu</a>
                            </li>
                            <li className=" pb-1 me-3">
                                <a className="text-muted text-decoration-none" href="mailto:hchou71@uw.edu">hchou71@uw.edu</a>
                            </li>
                            <li className=" pb-1 me-3">
                                <a className="text-muted text-decoration-none" href="mailto:jck1116@uw.edu">jck1116@uw.edu</a>
                            </li>
                            <li className=" pb-1 me-3">
                                <a className="text-muted text-decoration-none" href="mailto:vinliu20@uw.edu">vinliu20@uw.edu</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="footer-set text-center p-4" >
                &copy; 2022 FITNESS 340:
                <Link className="text-reset fw-bold" aria-label="Home Page" to=""> fitness340.com </Link>
            </div>
        </footer >
    )
}