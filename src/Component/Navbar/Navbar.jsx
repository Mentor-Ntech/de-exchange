import "./Navbar.css";

import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <nav>
        <div className="logo" onClick={goHome}>
          <img src="/src/assets/DLT-Africa.png" />
        </div>

        <Link to="/swap">Swap</Link>

        <button>Connect Wallet</button>
      </nav>
    </header>
  );
};

export default Navbar;
