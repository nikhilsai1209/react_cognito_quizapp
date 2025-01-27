import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' instead of 'react-dom'
import './index.css';
import App from './App';
import { Amplify } from 'aws-amplify'; // Use named import
import config from './amplifyconfiguration.json';

Amplify.configure(config);

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
