import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <header className="header">
        <Link to="/">
          <img src="/src/assets/DLT-Africa.png" />
        </Link>

        
        <div className="--flex-dir-column">
        <Link to='/swap' className="--btn --btn-secondary">Swap</Link>
        {/* <button className="--btn --btn-primary">Connect</button> */}

        </div>
      </header>
    </nav>
  );
};

export default Navbar;
