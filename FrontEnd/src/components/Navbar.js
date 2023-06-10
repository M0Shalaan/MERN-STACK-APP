import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout App</h1>
        </Link>
        <nav>
          <div>
            <Link to="/Login">Login</Link>
            <Link to="/Signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
