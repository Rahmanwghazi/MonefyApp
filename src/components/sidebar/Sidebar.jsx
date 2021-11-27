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
      <NavLink className={({ isActive }) => isActive? "active": ''} to="/dashboard">Dashboard</NavLink>
      <NavLink className={({ isActive }) => isActive? "active": ''} to="/add-data">Add Data</NavLink>
      <NavLink className={({ isActive }) => isActive? "active": ''} to="/history">History</NavLink>
      <NavLink className={({ isActive }) => isActive? "active": ''} to="/recommendation">Recommendation</NavLink>
      <NavLink className={({ isActive }) => isActive? "active": ''} to="/setting">Setting</NavLink>
    </div>
  );
};

export default Sidebar;