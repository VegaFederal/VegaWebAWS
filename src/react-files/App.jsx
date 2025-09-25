import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home.jsx'
import Capabilities from './routes/Capabilities.jsx'
import Our_Story from './routes/Our_Story.jsx'
import Partners from './routes/Partners.jsx'
import About_Us from './routes/About_Us.jsx'
import Copy from './routes/Copy.jsx'
import Copy_Two from './routes/Copy_Two.jsx'
import Copy_Three from './routes/Copy_Three.jsx'
import Copy_Four from './routes/Copy_Four.jsx'
import Copy_Five from './routes/Copy_Five.jsx'
import Copy_Six from './routes/Copy_Six.jsx'
import Copy_Seven from './routes/Copy_Seven.jsx'
import Copy_Eight from './routes/Copy_Eight.jsx'
import Careers_Main from './routes/Careers_Main.jsx'
import About_concept from './routes/About_concept.jsx'

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Capabilities" element={<Capabilities />}/>
      <Route path="/Our_Story" element={<Our_Story/>}/>
      <Route path="/Partners" element={<Partners/>}></Route>
      <Route path="/Careers" element={<Careers_Main/>}></Route>
      <Route path="/About_concept" element={<About_concept/>}></Route>
      <Route path="/Copy" element={<Copy/>}></Route>
      <Route path="/Copy_Two" element={<Copy_Two/>}></Route>
      <Route path="Copy_Three" element={<Copy_Three/>}></Route>
      <Route path="Copy_Four" element={<Copy_Four/>}></Route>
      <Route path="/Copy_Five" element={<Copy_Five/>}></Route>
      <Route path="/Copy_Six" element={<Copy_Six/>}></Route>
      <Route path="/Copy_Seven" element={<Copy_Seven/>}></Route>
      <Route path="/Copy_Eight" element={<Copy_Eight/>}></Route>
      </Routes>
    </>
  )
}

export default App;
