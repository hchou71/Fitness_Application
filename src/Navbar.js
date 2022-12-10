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
                        <Nav.Link as={Link} aria-label="Discussion page" to="discussion">Discussion</Nav.Link>
                        <div className="btn text-light" onClick={handleClick}>Sign Out</div>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>

    )

}

// export function NavBar() {
//     return (
//         < nav className="navbar navbar-inverse navbar-expand-lg navbar-dark" >
//             <div className="container-fluid">
//                 <Link className="navbar-brand" href="#">Fitness 340</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
//                     data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false"
//                     aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className=" navbar-collapse collapse" id="myNavbar">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item ">
//                             <Link className="nav-link" aria-label="Home Page" to="">Home</Link>
//                         </li>
//                         <li className="nav-item ">
//                             <Link className="nav-link" aria-label="Progress Page" to="track-progress">Progress Tracker</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" aria-label="Exercise Search Page" to="search">Exercise Searcher</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" aria-label="Discussion page" to="discussion">Discussion</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav >
//     )
// }