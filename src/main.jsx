import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-8WC1W08RGF'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
