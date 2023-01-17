import React from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ToDo from './pages/ToDo'
import MouseTracker from './pages/MouseTracker'
import Apis from './pages/Apis'
function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/mousetracker" element={<MouseTracker />} />
            <Route path="/apis" element={<Apis />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
