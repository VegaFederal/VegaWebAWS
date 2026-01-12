import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home.jsx'
import Capabilities from './routes/Capabilities.jsx'
import Our_Story from './routes/Our_Story.jsx'
import Careers_Main from './routes/Careers_Main.jsx'
import About_Updated from './routes/About_Updated.jsx'
import ExamplePage from './routes/ExamplePage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Capabilities" element={<Capabilities />}/>
      <Route path="/Our_Story" element={<Our_Story/>}/>
      <Route path="/Careers" element={<Careers_Main/>}></Route>
      <Route path="/About" element={<About_Updated/>}></Route>
      <Route path="/ExamplePage" element={<ExamplePage/>}></Route>
      </Routes>
    </>
  )
}

export default App;
