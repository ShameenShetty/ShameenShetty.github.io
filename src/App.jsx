import './App.css'

import {
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import TCS from './pages/projects/TCS'
import Cherp from './pages/projects/Cherp'

function App() {

  return (
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
  )
}

export default App