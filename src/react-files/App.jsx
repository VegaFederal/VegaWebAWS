import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Our_Story from './routes/Our_Story'
import Capabilities from './routes/Capabilities'


function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Our_Story" element={<Our_Story />}/>
      <Route path="/Capabilities" element={<Capabilities />}/>
      </Routes>
    </>
  )
}

export default App;
