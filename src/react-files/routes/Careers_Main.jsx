import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg';
import { FaDropbox } from 'react-icons/fa';

const Careers_Main = () => {
    return(
        <>
            {/* Smaller height navbar for careers page */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm" style={{ height: '40px' }}>
                <div>
                    <Navbar color_career='text-secondary'/>
                </div>
            </header>

            {/* Full page iframe with adjusted margin */}
            <div style={{ marginTop: '-30px' }}>
                <iframe 
                    src="https://www.careers-page.com/vega" 
                    style={{
                        width: '100%', 
                        height: 'calc(100vh - 20px)', 
                        border: 'none'
                    }}
                    title="Vega Federal Careers Portal"
                />
            </div>
        </>
    )
}

export default Careers_Main