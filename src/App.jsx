import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Guestbook from './components/Guestbook'
import Home from './components/Home'
import Layout from './components/Layout'
import './components/Layout/index.scss'
import Portfolio from './components/Portfolio'
import PortfolioBuilder from './components/Portfolio-builder'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/portfolio-builder" element={<PortfolioBuilder />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
