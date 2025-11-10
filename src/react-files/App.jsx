import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home.jsx'
import Capabilities from './routes/Capabilities.jsx'
import Our_Story from './routes/Our_Story.jsx'
import Careers_Main from './routes/Careers_Main.jsx'
import About_Updated from './routes/About_Updated.jsx'
import About_concept from './routes/About_concept.jsx'

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Capabilities" element={<Capabilities />}/>
      <Route path="/Our_Story" element={<Our_Story/>}/>
      <Route path="/Careers" element={<Careers_Main/>}></Route>
      <Route path="/About" element={<About_Updated/>}></Route>
      <Route path="/About_two" element={<About_concept/>}></Route>
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
