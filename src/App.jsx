import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './components/login'
import { Register } from './components/register'
import { Home } from './components/home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* <h1 className="text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
        Ekotracka
      </h1> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={ <Register/> } />
        <Route path="/login" element={ <Login/> } />
      </Routes>
  </Router>
  )
}

export default App