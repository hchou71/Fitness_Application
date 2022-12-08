import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

import SAMPLE_EXERCISES from './data/exercise-information.json';
import SAMPLE_DISCUSSION from './data/discussion-post.json';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App exercises={SAMPLE_EXERCISES} messageData={SAMPLE_DISCUSSION}/>
    </React.StrictMode>
  </BrowserRouter>
);
