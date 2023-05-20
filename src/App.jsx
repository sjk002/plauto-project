import './styles/main.scss'
import Home from './pages/Home'
import ReactGA from 'react-ga4';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react'

const tagManagerArgs = {
  gtmId: 'GTM-59CLCHN'
}

TagManager.initialize(tagManagerArgs)

function App() {

  return (
    <>
      <Home />
    </>
  )
}

export default App
