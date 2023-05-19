import './styles/main.scss'
import Home from './pages/Home'
import ReactGA4 from 'react-ga4';
import { useEffect } from 'react'

function App() {

  useEffect(() => {

    const MEASUREMENT_ID = 'G-QZ64B65MGY';

    ReactGA4.initialize(MEASUREMENT_ID);

    ReactGA4.pageview('/')
  }, [])

  return (
    <>
      <Home />
    </>
  )
}

export default App
