import {Routes, Route, useLocation} from 'react-router-dom'
import {useEffect} from 'react'
import Home from './routes/Home.jsx'
import Capabilities from './routes/Capabilities.jsx'
import Our_Story from './routes/Our_Story.jsx'
import Careers_Main from './routes/Careers_Main.jsx'
import About_Updated from './routes/About_Updated.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  const location = useLocation();

  useEffect(() => {
    // Reset focus on route change so skip link is first when tabbing
    // Use multiple timeouts to ensure DOM is fully updated after React Router navigation
    const timer1 = setTimeout(() => {
      // Blur any currently focused element immediately
      if (document.activeElement) {
        const activeEl = document.activeElement;
        if (activeEl !== document.body && activeEl !== document.documentElement) {
          activeEl.blur();
        }
      }
    }, 0);
    
    const timer2 = setTimeout(() => {
      // Second pass to ensure focus is cleared after React has finished rendering
      if (document.activeElement && document.activeElement !== document.body) {
        document.activeElement.blur();
      }
      
      // Ensure skip link is ready
      const skipLink = document.querySelector('.skip-link');
      if (skipLink) {
        skipLink.setAttribute('tabindex', '0');
      }
    }, 300);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Capabilities" element={<Capabilities />}/>
      <Route path="/Our_Story" element={<Our_Story/>}/>
      <Route path="/Careers" element={<Careers_Main/>}></Route>
      <Route path="/About" element={<About_Updated/>}></Route>
      </Routes>
    </>
  )
}

export default App;
