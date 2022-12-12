import React from "react";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getAuth, signOut } from 'firebase/auth';

export function NavBar() {

    const auth = getAuth();

    function handleClick(event) {
        signOut(auth)
            .catch(err => console.log(err));
        alert('Signing out. You will now be redirected to the home page.');
    }

    return (

        <Navbar variant="dark" expand="lg">
            <div className="container-fluid nav-container">
                <Navbar.Brand>Fitness 340</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mb-2 mb-lg-0">
                        <Nav.Link as={Link} aria-label="Home Page" to="">Home</Nav.Link>
                        <Nav.Link as={Link} aria-label="Progress Page" to="track-progress">Progress Tracker</Nav.Link>
                        <Nav.Link as={Link} aria-label="Exercise Search Page" to="search">Exercise Searcher</Nav.Link>
                        <Link to="/login" className="btn text-light" onClick={handleClick}>Sign Out</Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>

    )

}
