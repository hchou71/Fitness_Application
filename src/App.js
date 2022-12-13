import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { NavBar } from './Navbar.js';
import { Footer } from './Footer.js';
import { HomePage } from './Home.js';
import { NewExercise } from './new-exercise.js';
import { ExercisePage } from './exercise';
import { DetailsPage } from './exercise-details';
import { PastExercises } from './past-exercises';
import { ProgressPage } from './progress-page.js';
import { LoginPage } from './login.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App(props) {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;
        setCurrentUser(firebaseUser);
      } else {
        console.log("Logged Out");
        setCurrentUser(null);
      }
    })
  })


  function RequireAuth() {
    if (currentUser === null) {
      return (
        <div>
          <h1 className="py-5">Please sign in to view this page.</h1>
          <LoginPage currentUser={currentUser} />
        </div>
      );
    } else {
      return <Outlet />;
    }
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route element={<RequireAuth />} >
          <Route path="track-progress" element={<ProgressPage currentUser={currentUser} />} />
          <Route path="previous-workouts" element={<PastExercises currentUser={currentUser} />} />
          <Route path="new-exercise" element={<NewExercise exercises={props.exercises} currentUser={currentUser} />} />
          <Route path="exercises/:exercise" element={<DetailsPage exercises={props.exercises} currentUser={currentUser} />} />
        </Route>
        <Route path="login" element={<LoginPage currentUser={currentUser} />} />
        <Route path="" element={<HomePage />} />
        <Route path="search" element={<ExercisePage exercises={props.exercises} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App;