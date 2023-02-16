import Navigation from './components/Navigation/Navigation'
import { navLinks } from './assets/data/navigation'
import ReactGA from 'react-ga4'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GoToTop from './components/GoToTop/GoToTop'
// import { useEffect } from 'react'

const trackingId = 'UA-132431767-1'
ReactGA.initialize(trackingId)

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {navLinks.map((link) => {
          const { id, url, element } = link
          return <Route key={id} path={url} element={element} />
        })}
      </Routes>
      <GoToTop />
    </BrowserRouter>
  )
}

export default App
