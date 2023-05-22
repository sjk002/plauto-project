import './styles/main.scss'
import Home from './pages/Home'
import ReactGA from 'react-ga4';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react'
import { Axios } from 'axios';

const tagManagerArgs = {
  gtmId: import.meta.env.REACT_APP_GTM_KEY
}

TagManager.initialize(tagManagerArgs)

function App() {

  useEffect(() => {
    console.log(import.meta.env.REACT_APP_GTM_KEY)
  }, [])

  return (
    <>
      <Home />
    </>
  )
}

export default App
