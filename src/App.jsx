import './App.css'
import './pages/projects/ProjectPage.css'

import {
  Routes,
  Route
} from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import TCS from './pages/projects/TCS'
import Cherp from './pages/projects/Cherp'

function App() {

  return (
    <>
      <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects/tcs"
          element={<TCS />}
        />

        <Route
          path="/projects/cherp"
          element={<Cherp />}
        />

      </Routes>
    </>
  )
}

export default App