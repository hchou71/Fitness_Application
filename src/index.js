import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import 'whatwg-fetch';

import SAMPLE_EXERCISES from './data/exercise-information.json';
const SAMPLE_PAST = '../public/past-workout.json';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App exercises={SAMPLE_EXERCISES} url={SAMPLE_PAST}/>
    </React.StrictMode>
  </BrowserRouter>
);
