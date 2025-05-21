
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
   const navigate=useNavigate()
  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyApp</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
      </ul>
    </nav>
    <button onClick={()=>{navigate("/nav",{state:{from:"navigatepage",with:{name:"ankan",age:20}}})}}>navigate</button>
    </>
  );
};

export default Navbar;
