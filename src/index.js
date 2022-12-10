import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import 'whatwg-fetch';
import { initializeApp } from "firebase/app";

import SAMPLE_EXERCISES from './data/exercise-information.json';
const SAMPLE_PAST = '../public/past-workout.json';

const firebaseConfig = {
  apiKey: "AIzaSyAiAU7l9A2YOpkh2onDi4fq9LaYzj2Hlpo",
  authDomain: "react-chat-au22-b.firebaseapp.com",
  projectId: "react-chat-au22-b",
  storageBucket: "react-chat-au22-b.appspot.com",
  messagingSenderId: "394421526536",
  appId: "1:394421526536:web:7bad5c101a433ce83e31bd"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App exercises={SAMPLE_EXERCISES} url={SAMPLE_PAST}/>
    </React.StrictMode>
  </BrowserRouter>
);
