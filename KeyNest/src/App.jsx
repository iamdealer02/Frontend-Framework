// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import About from './views/About'
import Apartment from './views/Apartment'
import './App.css'
import NotFound from './views/NotFound'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartment/:id" element={<Apartment />} />
          <Route path="/not-found" element = {<NotFound /> }/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App