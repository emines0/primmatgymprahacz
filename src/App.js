import logo from './logo.svg'
import './App.css'
import about from './assets/data/aboutData'
import { FaBeer } from 'react-icons/fa'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <FaBeer />
          <br />
          Edit <code>src/App.js</code> and save to reload.
          {/* {about.map((img) => {
            return <img key={img.id} src={img.photo} alt={img.alt} />
          })} */}
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
