import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import PassingCount from './PassingCount';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <PassingCount />
  </div>
)

reportWebVitals();