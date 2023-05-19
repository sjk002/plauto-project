import './styles/main.scss'
import Home from './pages/Home'
import ReactGA from 'react-ga'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const TRACKING_ID = 'UA-268817949-1';
    ReactGA.initialize(TRACKING_ID);

    ReactGA.pageview('/')
  }, [])

  return (
    <>
      <Home />
    </>
  )
}

export default App
