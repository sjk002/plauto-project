import './styles/main.scss'
import Home from './pages/Home'
import ReactGA from 'react-ga4';
import { useEffect } from 'react'

function App() {

  useEffect(() => {

    const TRACKING_ID = 'G-QZ64B65MGY';
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: 'pageview', page: "/" });
  }, [])

  return (
    <>
      <Home />
    </>
  )
}

export default App
