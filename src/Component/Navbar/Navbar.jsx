import './Navbar.css'
import imgLogo from '../../assets/DLT-Africa.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  // const logo = imgLogo
  return (
    <div className="container">
      <div className="navbar">
        <div className="navItem">
          <img className="imgLogo" src={imgLogo} alt="" />
        </div>
        <div className='navText'>
          <Link style={{textDecoration: 'none'}} to="swap">
            <p>Swap</p>
          </Link>

        </div>
        <div>
          <button className="btn-nav">Connect</button>
        </div>
      </div>
    
    </div>
  );
}

export default Navbar