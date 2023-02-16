import Navigation from './components/Navigation/Navigation'
import { navLinks } from './assets/data/navigation'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
    </BrowserRouter>
  )
}

export default App
