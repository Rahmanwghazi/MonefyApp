import './SmallSidebar.css'
import logo from '../../assets/logo.png'
import { NavLink, Link } from "react-router-dom";
import { RefreshPage } from '../../utils/Reloader';

const SmallSidebar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark small-sidenav">
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
                                    <li className="nav-items">
                                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/dashboard" onClick={RefreshPage}>Dashboard</NavLink>
                                    </li>
                                    <li className="nav-items">
                                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/add-data" onClick={RefreshPage}>Add Data</NavLink>
                                    </li>
                                    <li className="nav-items">
                                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/history" onClick={RefreshPage}>History</NavLink>
                                    </li>
                                    <li className="nav-items">
                                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/recommendation" onClick={RefreshPage}>Recommendation</NavLink>
                                    </li>
                                    <li className="nav-items">
                                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/setting" onClick={RefreshPage}>Setting</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="modal-footer border-0 gap-3">
                                <Link to="/">
                                    <button className="btn btn-default btn-no-fill">Home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default SmallSidebar;