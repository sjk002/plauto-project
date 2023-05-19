import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ReactGA from 'react-ga'

const TRACKING_ID = 'UA-268817949-1';

ReactGA.initialize(TRACKING_ID);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
