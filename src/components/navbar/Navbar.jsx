import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a href="/#">
        <img className="logo"
          src={logo} alt="logo"></img>
      </a>
      <button className="navbar-toggler border-0" type="button" data-bs-toggle="modal" data-bs-target="#targetModal-item">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="modal-item modal fade" id="targetModal-item" tabIndex="-1" role="dialog"
        aria-labelledby="targetModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content border-0">
            <div className="modal-header border-0">
              <a className="modal-title" href="/#" id="targetModalLabel">
                <img className="logo"
                  src={logo}
                  alt=""></img>
              </a>
              <button type="button" className="close btn-close text-white" data-bs-dismiss="modal" aria-label="Close">
              </button>
            </div>
            <div className="modal-body">
              <ul className="navbar-nav responsive me-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link to="/" className="nav-link" style={{ color: "#E7E7E8" }}>Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">Feature</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">Tips</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">About</a>
                </li>
                <li className="nav-item">
                  <Link to="/dahsboard" className="nav-link" href="/#">Dashboard</Link>
                </li>
              </ul>
            </div>
            <div className="modal-footer border-0 gap-3">
              <Link to="/signin">
                <button className="btn btn-default btn-no-fill">Sign In</button>
              </Link>
              <button className="btn btn-fill border-0 text-white">Try Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/" className="nav-link" href="/#" style={{ color: "#E7E7E8" }}>Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">Feature</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">Tips</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">About</a>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link" href="/#">Dashboard</Link>
          </li>
        </ul>
        <div className="gap-3">
          <button type="button" className="btn btn-default btn-no-fill" data-bs-toggle="modal" data-bs-target="#modalForm">
            Sign in
          </button>
          <div className="modal fade mt-5" id="modalForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="logo-modal">
                  <img className="logo" src={logo} alt="logo"></img>
                </div>
                <div className="modal-body">
                  <h5 className="label-modal">Sign in</h5>
                  <p className="float-start text-modal">Not have an account yet? <a href="/#">Sign Up</a></p>
                  <form className="form-modal">
                    <div className="mb-3 mt-5">
                      <label className="form-label">Email Address</label>
                      <input type="text" className="form-control" id="username" name="username" placeholder="user@gmail.com" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="rememberMe" />
                      <label className="form-check-label text-white" htmlFor="rememberMe">Remember me</label>
                    </div>
                    <Link to="/dashboard">
                    <button type="submit" className="btn btn-signin">Sign In</button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-fill text-white border-0">Try Now</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


