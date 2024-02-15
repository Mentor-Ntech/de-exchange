import './Navbar.css'
import imgLogo from '../../assets/DLT-Africa.png'
const Navbar = () => {
  // const logo = imgLogo
  return (
    <div className="container">
      <div className="navbar">
        <div className="navItem">
          <img className="imgLogo" src={imgLogo} alt="" />
        </div>
        <div className='navText'>
          <p >Swap</p>

        </div>
        <div>
          <button className="btn-nav">Connect</button>
        </div>
      </div>
    
    </div>
  );
}

export default Navbar