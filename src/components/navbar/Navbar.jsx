import './Navbar.css'
import logo from '../../assets/logo.png'
import { HashLink as Link } from 'react-router-hash-link';
import { useGetUsername } from '../../hooks/useGetUsername';

const Navbar = (props) => {

  const { isAuthenticated } = props.auth
  const { dataGetUsername } = useGetUsername()

  // useEffect(()=>{
  //   if (isAuthenticated()) {
  //     navigate('/dashboard');
  //   }
  // },[])

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
                  <Link smooth to="#" className="nav-link" style={{ color: "#E7E7E8" }}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link smooth to="#feature" className="nav-link">Feature</Link>
                </li>
                <li className="nav-item">
                  <Link smooth to="#tips" className="nav-link">Tips</Link>
                </li>
                <li className="nav-item">
                  <Link smooth to="#about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dahsboard" className="nav-link" href="/#">Dashboard</Link>
                </li>
              </ul>
            </div>
            <div className="modal-footer border-0 gap-3">
              <Link to="/#">
                <button className="btn btn-default btn-no-fill">Sign In</button>
              </Link>
              <button className="btn btn-fill border-0 text-white">Try Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link smooth to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link smooth to="#feature" className="nav-link">Feature</Link>
          </li>
          <li className="nav-item">
            <Link smooth to="#tips" className="nav-link">Tips</Link>
          </li>
          <li className="nav-item">
            <Link smooth to="#about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            {
              isAuthenticated() ? <Link to="/dashboard" className="nav-link" href="/#">Dashboard</Link> :
                <p className="nav-link" style={{ cursor: "pointer" }} onClick={() => props.auth.login()}>Dashboard</p>
            }
          </li>
        </ul>
        <div className="gap-3">
          {
            !isAuthenticated() && (
              <>
                <button type="button" className="btn btn-default btn-no-fill" onClick={() => props.auth.login()}>
                  Sign in
                </button>
                <button className="btn btn-fill text-white border-0" onClick={() => props.auth.login()} >
                  Try Now
                </button>
              </>
            )
          }
          {
            isAuthenticated() && (
              <p className="text-white">
                Hi, {dataGetUsername?.user.map(item => (item.name))}
              </p>
            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar


