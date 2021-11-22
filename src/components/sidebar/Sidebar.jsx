import './Sidebar.css'
import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidenav">
      <a href="/#" className="mt-5">
        <img className="logo"
          src={logo} alt="logo"></img>
        Monefy
      </a>
      <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
      <NavLink activeClassName="active" to="/add-data">Add Data</NavLink>
      <NavLink activeClassName="active" to="/history">History</NavLink>
      <NavLink activeClassName="active" to="/recommendation">Recommendation</NavLink>
      <NavLink activeClassName="active" to="/setting">Setting</NavLink>
    </div>
  );
};

export default Sidebar;