import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="nav-container">
      <Link to="/" className="nav-item-1">
        <div>Home</div>
      </Link>
      <Link to="/contact-us" className="nav-item-2">
        <div>Contact Us</div>
      </Link>
      <Link to="/login" className="nav-item-3">
        <div>Login</div>
      </Link>
      <Link to="/sign-up" className="nav-item-4">
        <div>Sign Up</div>
      </Link>
    </div>
  );
};

export default NavBar;
