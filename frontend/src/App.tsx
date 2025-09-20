// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Quiz from './pages/Quiz'
import Edu from './pages/Edu'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <link href="/src/style.css" rel="stylesheet" />
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/edu" element={<Edu />} />
        </Routes>
      </Router>

      <Footer />
    </>
  )
}

export default App
