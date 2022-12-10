import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { NavBar } from './Navbar.js';
import { Footer } from './Footer.js';
import { HomePage } from './Home.js';
import { NewExercise } from './new-exercise.js';
import { PastWorkoutTest } from './PastWorkoutTest';
import { ExercisePage } from './exercise';
import { DetailsPage } from './exercise-details';
import { PastExercises } from './past-exercises';
import { ProgressPage } from './progress-page.js';
import { LoginPage } from './login.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database'; //realtime

function App(props) {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUser) => {
      if(firebaseUser) {
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;;
        setCurrentUser(firebaseUser);
        const db = getDatabase(); //"the database"
        const UserRef = ref(db, "Users");
        firebaseSet(UserRef, );
      } else {
        console.log("Logged Out");
        setCurrentUser(null);
      }
    })
  })

  console.log(currentUser);

  function RequireAuth() {
    if (currentUser === null) {
      return (
        <div>
          <h1 className="py-5">Please sign in to view this page.</h1>
          <LoginPage currentUser={currentUser}/>
        </div>
      );
    } else {
      return <Outlet />;
    }
  }

  return (
    <div>
      {/* classname="home-exa"  */}
      <NavBar/>
      <Routes>
        <Route element={<RequireAuth />} >
          <Route path="track-progress" element={<ProgressPage />} />
          <Route path="previous-workouts" element={<PastExercises />} />
          <Route path="new-exercise" element={<NewExercise exercises={props.exercises}/>} />
          <Route path="discussion" element={<PastWorkoutTest url={props.url} />} />
        </Route>
        <Route path="login" element={<LoginPage currentUser={currentUser}/>} />
        <Route path="" element={<HomePage />} />
        <Route path="search" element={<ExercisePage exercises={props.exercises} />} />
        <Route path="/:exercise" element={<DetailsPage exercises={props.exercises} />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App;


