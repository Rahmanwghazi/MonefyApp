import './Header.css'
import img from '../../assets/illustration.svg'
import Navbar from '../navbar/Navbar'

const Header = () =>{
    return(
        <div>
          <Navbar />
        <div className="mx-auto d-flex flex-lg-row flex-column hero mt-5">
          <div
            className="left-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center">
            <h1 className="brand"> Monefy</h1>
            <h1 className="title-text-big">The best way<br className=" d-lg-block d-none"/> to organize your money</h1>
            <div className="d-flex flex-sm-row flex-column align-items-center mx-lg-0 mx-auto justify-content-center gap-3">
              <button className="btn d-inline-flex mb-md-0 btn-try text-white border-0">Try it free</button>
              <button className="btn btn-outline">
                <div className="d-flex align-items-center">
                  Watch the video
                </div>
              </button>
            </div>
          </div>
       
          <div className="right-column text-center d-flex justify-content-center pe-0">
            <img id="img-fluid" className="h-auto mw-100"
              src={img} alt=""></img>
          </div>

        </div>
      </div>
    )
}

export default Header
