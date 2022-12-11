import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import 'whatwg-fetch';
import { initializeApp } from "firebase/app";

import SAMPLE_EXERCISES from './data/exercise-information.json';
// const SAMPLE_PAST = '../public/past-workout.json';

const firebaseConfig = {
  apiKey: "AIzaSyC5Iqu90H8p42XbyLWaZhSxZhSr3oXq1W4",
  authDomain: "project-fitness-application.firebaseapp.com",
  projectId: "project-fitness-application",
  storageBucket: "project-fitness-application.appspot.com",
  messagingSenderId: "774575341282",
  appId: "1:774575341282:web:da7f6fda6177c86227e8bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App exercises={SAMPLE_EXERCISES} /> {/*url={SAMPLE_PAST}*/}
    </React.StrictMode>
  </BrowserRouter>
);
