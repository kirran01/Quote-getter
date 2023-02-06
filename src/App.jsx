import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Quotes</h1>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
