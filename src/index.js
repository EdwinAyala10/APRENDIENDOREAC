import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MiComponente } from './components/MiComponente';
import reportWebVitals from './reportWebVitals';

if (document.getElementById('root')) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<React.StrictMode><App /></React.StrictMode>);
  //reportWebVitals();
}

/*
if (document.getElementById('example')) {
  const root = ReactDOM.createRoot(document.getElementById('example'));
  root.render(<React.StrictMode><MiComponente /></React.StrictMode>);
}*/


