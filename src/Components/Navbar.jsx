import { Link } from "react-router-dom";
// import App from "../App";

const Navbar = () => {
  return (
    <div className='Card links'>
        <Link to="/Home">HOME </Link>
        <Link to="./About">ABOUT </Link>
        <Link to="./Project">PROJECT</Link>
        <Link to='/'>X</Link>
    </div>
  );
};

export default Navbar;
