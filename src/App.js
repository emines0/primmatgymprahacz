import Navigation from './components/Navigation/Navigation'
import Homepage from './components/_pages/Homepage/Homepage'
import Trainings from './components/_pages/Trainings/Trainings'
import About from './components/_pages/About/About'
import Partners from './components/_pages/Partners/Partners'
import Contact from './components/_pages/Contact/Contact'

function App() {
  return (
    <>
      <Contact />
      <Navigation />
      <Homepage />
      <Trainings />
      <About />
      <Partners />
    </>
  )
}

export default App
