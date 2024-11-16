import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Guestbook from './components/Guestbook'
import PortfolioBuilder from './components/Portfolio-builder'
import './App.scss'
import "./components/Layout/index.scss"
import React from 'react'

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
