import Navbar from '../components/Navbar'
import SkipLink from '../components/SkipLink'

const Careers_Main = () => {
    return(
        <>
        <SkipLink />
            <Navbar />

            <div id="after-navbar" tabIndex={-1} style={{ paddingTop: '56px' }}>
                <main id="main-content" tabIndex={-1}>
                {/* Full page iframe with adjusted margin */}
                <div>
                    <iframe 
                        src="https://www.careers-page.com/vega" 
                        style={{
                            width: '100%', 
                            height: 'calc(100vh - 56px)', 
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