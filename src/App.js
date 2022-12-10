import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { NavBar } from './Navbar.js';
import { Footer } from './Footer.js';
import { HomePage } from './Home.js';
import { NewExercise } from './new-exercise.js';
import { PastWorkoutTest } from './PastWorkoutTest';
import { ExercisePage } from './exercise';
import { DetailsPage } from './exercise-details';
import { PastExercises } from './past-exercises';
import { ProgressPage } from './progress-page.js';
import { LoginPage } from './login';
import { Example } from './Navbar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { LoginPage } from './login.js';

function App(props) {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUser) => {
      if(firebaseUser) {
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;
        setCurrentUser(firebaseUser);
      } else {
        console.log("Logged Out");
      }
    })
  })

  function RequireAuth() {
    if (currentUser === null) {
      return <Navigate to="/login" />;
    } else {
      return <Outlet />;
    }
  }

  return (
    <div>
      {/* classname="home-exa"  */}
      <NavBar />
      <Routes>
        <Route element={<RequireAuth />} >
          <Route path="track-progress" element={<ProgressPage />} />
          <Route path="previous-workouts" element={<PastExercises />} />
          <Route path="new-exercise" element={<NewExercise />} />
          <Route path="discussion" element={<PastWorkoutTest url={props.url} />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="" element={<HomePage />} />
        <Route path="exercise-details" element={<DetailsPage exerciseObj={props.exercises[0]} />} />
        <Route path="search" element={<ExercisePage exercises={props.exercises} />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App;


