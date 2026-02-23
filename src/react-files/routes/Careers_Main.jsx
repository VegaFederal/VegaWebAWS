import Navbar from '../components/Navbar'
import SkipLink from '../components/SkipLink'

const Careers_Main = () => {
    return(
        <>
        <SkipLink />
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm" style={{ height: '40px' }}>
                <div>
                    <Navbar color_career='text-secondary'/>
                </div>
            </header>

            <div id="after-navbar" tabIndex={-1}>
                <main id="main-content" tabIndex={-1}>
                {/* Full page iframe with adjusted margin */}
                <div style={{ marginTop: '-30px' }}>
                    <iframe 
                        src="https://www.careers-page.com/vega" 
                        style={{
                            width: '100%', 
                            height: 'calc(100vh - 20px)', 
                            border: 'none'
                        }}
                        title="Vega Careers Portal"
                    />
                </div>
                </main>
            </div>
        </>
    )
}

export default Careers_Main