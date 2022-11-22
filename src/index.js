import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import SAMPLE_EXERCISES from './data/exercise-information.json';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App exercises={SAMPLE_EXERCISES}/>
  </React.StrictMode>
);
