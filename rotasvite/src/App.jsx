import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Home } from './pages/Home'
import { Photos } from './pages/Photos'
import { Psd } from './pages/Psd'
import { Vectors } from './pages/Vectors'


function App() {

  return (
    //ROTAS
    <>

      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/photos' element={<Photos />} />
              <Route path='/psd' element={<Psd />} />
              <Route path='/vectors' element={<Vectors />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
