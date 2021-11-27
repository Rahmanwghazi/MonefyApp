import './Home.css'
import Header from "../../components/header/Header"
import Feature from '../../components/feature/Feature'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <>
            <div className="container p-0 header-main" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <Header />
            </div>
            <div className="feature">
                <Feature />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

export default Home